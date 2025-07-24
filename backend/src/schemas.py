from pydantic import BaseModel, EmailStr
from typing import List, Optional, Generic, TypeVar
from datetime import datetime

class ContactSchema(BaseModel):
    """Base schema for creating/updating a contact."""
    name: str
    email: EmailStr
    message: Optional[str] = None

class ContactInDB(BaseModel):
    id: int
    name: str
    email: EmailStr
    message: str
    created_at: datetime
    updated_at: datetime

    model_config = {
        "from_attributes": True,
        "json_encoders": {
            datetime: lambda dt: dt.isoformat(),
        },
    }


T = TypeVar("T")

class ResponseBase(BaseModel):
    """Base response schema shared by all responses."""
    success: bool
    message: str


class ResponseData(ResponseBase, Generic[T]):
    """Single item response schema."""
    data: Optional[T] = None


class ResponseList(ResponseBase, Generic[T]):
    """List response schema."""
    data: List[T]


class ResponseError(BaseModel):
    """Error response schema."""
    success: bool = False
    message: str
    error: Optional[str] = None
