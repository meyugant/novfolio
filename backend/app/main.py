from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.upload import router as upload_router
from app.api.auth import router as auth_router
from app.api.portfolio import router as portfolio_router
from app.config.settings import settings
from app.api.profile import router as profile_router
from app.api.project import router as project_router
from app.api.experience import router as experience_router
from app.api.education import router as education_router
from app.api.skill import router as skill_router
from app.api.social_link import router as social_link_router


app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.PROJECT_VERSION
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth_router)
app.include_router(portfolio_router)
app.include_router(profile_router)
app.include_router(project_router)
app.include_router(experience_router)
app.include_router(education_router)
app.include_router(skill_router)
app.include_router(social_link_router)
app.include_router(upload_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to Novfolio 🚀"
    }