from fastapi import APIRouter, Request, HTTPException, Depends, status
from sqlalchemy.orm import Session
from dotenv import load_dotenv
from svix.webhooks import Webhook
from svix.exceptions import WebhookVerificationError
from src.schemas import UserSchema, UserInDB, ResponseData
from src.models import UserModel
from src.database import get_db

import os
import json

load_dotenv()
router = APIRouter()


@router.post("/users", status_code=status.HTTP_201_CREATED)
async def user_create(request: Request, db: Session = Depends(get_db)):
    WEBHOOK_SECRET_KEY = os.getenv("CLERK_WEBHOOK_SECRET_KEY")
    if not WEBHOOK_SECRET_KEY:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Webhook secret key not configured."
        )

    try:
        body = await request.body()
        payload = body.decode("utf-8")
        headers = dict(request.headers)

        wh = Webhook(WEBHOOK_SECRET_KEY)
        wh.verify(payload, headers)

        if os.getenv("DEBUG_WEBHOOKS") == "1":
            print("Received Clerk Webhook Payload:", payload)

        data = json.loads(payload)

        if data.get("type") != "user.created":
            return ResponseData(success=True, message="Event ignored", data=None)

        user_data = data.get("data", {})

        emails = user_data.get("email_addresses", [])
        if not emails:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="No email address found in Clerk user data."
            )

        user_id = user_data["id"]
        email = emails[0]["email_address"]

        user_schema = UserSchema(id=user_id, email=email)

        existing = db.query(UserModel).filter_by(email=user_schema.email).first()
        if existing:
            return ResponseData(
                success=True,
                message="User already exists.",
                data=UserInDB.model_validate(existing)
            )

        new_user = UserModel(**user_schema.dict())
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return ResponseData(
            success=True,
            message="User created successfully",
            data=UserInDB.model_validate(new_user)
        )

    except WebhookVerificationError:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Webhook signature verification failed."
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Unexpected error: {str(e)}"
        )
