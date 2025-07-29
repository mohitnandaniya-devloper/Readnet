from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from src.schemas import PlanSchema, PlanInDB, ResponseData, ResponseList
from src.models import PlanModel
from src.database import get_db

router = APIRouter()

@router.get("/", response_model=ResponseList[PlanInDB])
def list_plans(db: Session = Depends(get_db)):
    plans = db.query(PlanModel).all()
    return ResponseList(
        success=True,
        message="List of plans retrieved successfully",
        data=plans
    )


@router.post("/", response_model=ResponseData[PlanInDB], status_code=status.HTTP_201_CREATED)
def create_plan(plan: PlanSchema, db: Session = Depends(get_db)):
    new_plan = PlanModel(**plan.dict())
    db.add(new_plan)
    db.commit()
    db.refresh(new_plan)

    return ResponseData(
        success=True,
        message="Plan created successfully",
        data=PlanInDB.model_validate(new_plan)
    )


@router.get("/{plan_id}", response_model=ResponseData[PlanInDB])
def get_plan(plan_id: int, db: Session = Depends(get_db)):
    plan = db.query(PlanModel).filter_by(id=plan_id).first()
    if not plan:
        raise HTTPException(status_code=404, detail="Plan not found")

    return ResponseData(
        success=True,
        message="Plan retrieved successfully",
        data=PlanInDB.model_validate(plan)
    )


@router.put("/{plan_id}", response_model=ResponseData[PlanInDB])
def update_plan(plan_id: int, updated_data: PlanSchema, db: Session = Depends(get_db)):
    plan = db.query(PlanModel).filter_by(id=plan_id).first()
    if not plan:
        raise HTTPException(status_code=404, detail="Plan not found")

    for key, value in updated_data.dict().items():
        setattr(plan, key, value)

    db.commit()
    db.refresh(plan)

    return ResponseData(
        success=True,
        message="Plan updated successfully",
        data=PlanInDB.model_validate(plan)
    )


@router.delete("/{plan_id}", response_model=ResponseData[None])
def delete_plan(plan_id: int, db: Session = Depends(get_db)):
    plan = db.query(PlanModel).filter_by(id=plan_id).first()
    if not plan:
        raise HTTPException(status_code=404, detail="Plan not found")

    db.delete(plan)
    db.commit()

    return ResponseData(
        success=True,
        message=f"Plan with ID {plan_id} deleted successfully",
        data=None
    )
