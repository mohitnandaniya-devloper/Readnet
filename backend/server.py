from src.main import app
import os
from dotenv import load_dotenv
load_dotenv()

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", 8000)))
    # uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", 8000)), log_level="info")
