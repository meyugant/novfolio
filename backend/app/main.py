from fastapi import FastAPI

from app.config.settings import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.PROJECT_VERSION
)


@app.get("/")
def root():
    return {
        "message": "Welcome to Novfolio 🚀"
    }