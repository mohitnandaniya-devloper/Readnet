from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_payments():
    return ({"success":True,"message":"List of payments retrieved successfully"},)