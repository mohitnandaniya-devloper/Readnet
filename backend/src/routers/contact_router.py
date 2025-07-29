from fastapi import APIRouter, HTTPException, status, Depends
from src.schemas import ContactSchema, ContactInDB, ResponseData, ResponseList
from src.models import ContactModel
from src.database import get_db
from sqlalchemy.orm import Session

router = APIRouter()

@router.get("/", response_model=ResponseList[ContactInDB])
def list_contacts(db: Session = Depends(get_db)):
    contacts = db.query(ContactModel).all()
    return ResponseList(
        success=True,
        message="List of contacts retrieved successfully",
        data=contacts
    )


@router.post("/", response_model=ResponseData[ContactInDB], status_code=status.HTTP_201_CREATED)
def create_contact(contact: ContactSchema, db: Session = Depends(get_db)):
    existing = db.query(ContactModel).filter_by(email=contact.email).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A contact with this email already exists."
        )

    new_contact = ContactModel(**contact.dict())
    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)

    return ResponseData(
        success=True,
        message="Contact created successfully",
        data=ContactInDB.model_validate(new_contact)
    )


@router.get("/{contact_id}", response_model=ResponseData[ContactInDB])
def get_contact(contact_id: int, db: Session = Depends(get_db)):
    contact = db.query(ContactModel).filter_by(id=contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")

    return ResponseData(
        success=True,
        message="Contact retrieved successfully",
        data=ContactInDB.model_validate(contact)
    )


@router.put("/{contact_id}", response_model=ResponseData[ContactInDB])
def update_contact(contact_id: int, updated_data: ContactSchema, db: Session = Depends(get_db)):
    contact = db.query(ContactModel).filter_by(id=contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")

    for key, value in updated_data.dict().items():
        setattr(contact, key, value)

    db.commit()
    db.refresh(contact)

    return ResponseData(
        success=True,
        message="Contact updated successfully",
        data=ContactInDB.model_validate(contact)
    )


@router.delete("/{contact_id}", response_model=ResponseData[None])
def delete_contact(contact_id: int, db: Session = Depends(get_db)):
    contact = db.query(ContactModel).filter_by(id=contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")

    db.delete(contact)
    db.commit()

    return ResponseData(
        success=True,
        message=f"Contact with ID {contact_id} deleted successfully",
        data=None
    )

