from fastapi import APIRouter, Request, HTTPException
from svix.webhooks import Webhook
import os
from dotenv import load_dotenv
import json

load_dotenv()
router = APIRouter()

@router.post("/clerk")
async def handle_user_create(request: Request):
    WEBHOOK_SECRET_KEY = os.getenv("CLERK_WEBHOOK_SECRET_KEY")
    if not WEBHOOK_SECRET_KEY:
        raise HTTPException(status_code=500, detail="Webhook secret key not configured.")

    body = await request.body()
    payload = body.decode("utf-8")
    headers = dict(request.headers)

    try:
        wh = Webhook(WEBHOOK_SECRET_KEY)
        wh.verify(payload, headers)

        data = json.loads(payload)

        if data.get("type") != "user.created":
            return {"status": "ignored"}

        user_data = data.get("data", {})
        # 🚀 You can now use user_data["email_addresses"], ["id"], ["first_name"], etc.

        return print({"status": "success", "user": user_data})

    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Webhook verification failed: {str(e)}")


    # return ({"success":True,"message":"List of webhooks retrieved successfully"},)

