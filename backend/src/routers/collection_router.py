from fastapi import APIRouter, HTTPException, Query
from src.schemas import ResponseList, ResponseData, CollectionSchema
from botocore.exceptions import ClientError
from src.services import get_s3_service, AWS_BUCKET

router = APIRouter()




@router.get("/", response_model=ResponseList[CollectionSchema])
def list_files():
    try:
        s3_client = get_s3_service()
        response = s3_client.list_objects_v2(Bucket=AWS_BUCKET)

        files = []
        for obj in response.get("Contents", []):
            print(obj)
            filename = obj["Key"]
            presigned_url = s3_client.generate_presigned_url(
                ClientMethod="get_object",
                Params={"Bucket": AWS_BUCKET, "Key": filename},
                ExpiresIn=300
            )
            files.append(CollectionSchema(name=filename, url=presigned_url))

        return ResponseList[CollectionSchema](
            success=True,
            message="Files fetched successfully",
            data=files
        )
    except ClientError as e:
        raise HTTPException(status_code=500, detail=f"S3 error: {e.response['Error']['Message']}")



