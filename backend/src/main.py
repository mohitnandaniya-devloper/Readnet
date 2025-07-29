import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.routers.contact_router import router as contact_router
from src.routers.collection_router import router as collection_router
from src.routers.payment_router import router as payment_router
from src.routers.user_router import router as user_router
from src.routers.plan_router import router as plan_router
from src.routers.webhook_router import router as webhook_router
load_dotenv()

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_ORIGIN", "http://localhost:5173")],
    # allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


app.include_router(contact_router, prefix="/contacts", tags=["Contact API"])
app.include_router(plan_router, prefix="/plans", tags=["Plan API"])
app.include_router(collection_router, prefix="/collections", tags=["Collection API"])
app.include_router(payment_router, prefix="/payments", tags=["Payment API"])
app.include_router(user_router, prefix="/webhooks", tags=["User API"])
app.include_router(webhook_router, prefix="/webhooks", tags=["Webhook API"])


@app.get("/", tags=["Default"])
def read_root():
    return {"message": "Welcome to the ReadnetAPI!"}