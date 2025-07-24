from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def root():
    return {"success": True, "message": "Welcome to the Transaction API!"}