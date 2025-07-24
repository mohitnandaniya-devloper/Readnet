import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.routers.contact_router import router as contact_router
from src.routers.collection_router import router as collection_router
from src.routers.transaction_router import router as transaction_router
from src.routers.user_router import router as user_router

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

app.include_router(contact_router, prefix="/contacts", tags=["ContactAPI"])
app.include_router(collection_router, prefix="/collections", tags=["CollectionAPI"])
app.include_router(transaction_router, prefix="/transactions", tags=["TransactionAPI"])
app.include_router(user_router, prefix="/users", tags=["UserAPI"])

@app.get("/", tags=["Default"])
async def read_root():
    return {"message": "Welcome to the ReadnetAPI!"}