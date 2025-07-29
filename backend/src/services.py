import os
import boto3
import razorpay
from dotenv import load_dotenv
from fastapi import HTTPException
from botocore.config import Config
load_dotenv()

RAZORPAY_ID_KEY = os.getenv("RAZORPAY_ID_KEY")
RAZORPAY_SECRET_KEY = os.getenv("RAZORPAY_SECRET_KEY")

AWS_BUCKET = os.getenv("AWS_S3_BUCKET_NAME")
AWS_REGION = os.getenv("AWS_REGION")
AWS_ACCESS_KEY = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")


def get_razorpay_service():
    if not all([RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY]):
        raise HTTPException(status_code=500, detail="Missing Razorpay credentials or config")
    
    return razorpay.Client(auth=(RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY))


def get_s3_service():
    if not all([AWS_BUCKET, AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY]):
        raise HTTPException(status_code=500, detail="Missing AWS credentials or config")
    
    return boto3.client("s3", region_name=AWS_REGION, aws_access_key_id=AWS_ACCESS_KEY, aws_secret_access_key=AWS_SECRET_KEY, config=Config(signature_version="s3v4"))