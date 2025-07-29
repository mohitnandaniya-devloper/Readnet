from sqlalchemy import Column, Integer, String, DateTime, Float
from src.database import Base, engine
from datetime import datetime, timezone

class ContactModel(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String(254), unique=True, index=True, nullable=False)
    message = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))


class PlanModel(Base):
    __tablename__ = "plans"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String, nullable=False)
    desc = Column(String, nullable=True)
    amount = Column(Float, nullable=False, default=10.10)
    duration = Column(Integer, nullable=False, default=30)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))


Base.metadata.create_all(bind=engine)