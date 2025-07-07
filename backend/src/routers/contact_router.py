from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

router = APIRouter()

class Contact(BaseModel):
    name: str
    email: EmailStr
    message: str

@router.post("/receive")
async def receive_contact(contact: Contact):
    print(f"Received: name='{contact.name}' email='{contact.email}' message='{contact.message}'")
    return {"success": True, "message": "Message received successfully"}

