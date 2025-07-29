from fastapi import APIRouter, HTTPException, Query
from src.schemas import ResponseList, ResponseData
from botocore.exceptions import ClientError
from src.services import get_s3_service, AWS_BUCKET

router = APIRouter()

@router.get("/list", response_model=ResponseList[str], summary="List all files in S3 bucket")
def list_files():
    try:
        s3_client = get_s3_service()
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
        s3_client = get_s3_service()
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
