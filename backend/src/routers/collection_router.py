import os
import boto3
from fastapi import APIRouter, HTTPException, Query
from src.schemas import ResponseList, ResponseData
from botocore.exceptions import ClientError
from botocore.config import Config
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

AWS_BUCKET = os.getenv("AWS_S3_BUCKET_NAME")
AWS_REGION = os.getenv("AWS_REGION")
AWS_ACCESS_KEY = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")

def get_s3_client():
    if not all([AWS_BUCKET, AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY]):
        raise HTTPException(status_code=500, detail="Missing AWS credentials or config")
    
    return boto3.client(
        "s3",
        region_name=AWS_REGION,
        aws_access_key_id=AWS_ACCESS_KEY,
        aws_secret_access_key=AWS_SECRET_KEY,
        config=Config(signature_version="s3v4")
    )

@router.get("/list", response_model=ResponseList[str], summary="List all files in S3 bucket")
def list_files():
    try:
        s3_client = get_s3_client()
        response = s3_client.list_objects_v2(Bucket=AWS_BUCKET)
        files = [obj["Key"] for obj in response.get("Contents", [])]

        return ResponseList[str](
            success=True,
            message="Files fetched successfully",
            data=files
        )

    except ClientError as e:
        raise HTTPException(status_code=500, detail=f"S3 error: {e.response['Error']['Message']}")


@router.get("/view", response_model=ResponseData[str], summary="Get presigned URL for viewing a file")
def get_presigned_url(filename: str = Query(..., description="Filename in S3")):
    try:
        s3_client = get_s3_client()
        presigned_url = s3_client.generate_presigned_url(
            ClientMethod="get_object",
            Params={"Bucket": AWS_BUCKET, "Key": filename},
            ExpiresIn=300  # 5 minutes
        )

        return ResponseData[str](
            success=True,
            message="Presigned URL generated",
            data=presigned_url
        )

    except ClientError as e:
        raise HTTPException(status_code=500, detail=f"S3 error: {e.response['Error']['Message']}")
