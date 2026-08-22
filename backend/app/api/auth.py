from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.auth.jwt import create_access_token
from app.dependencies.database import get_db
from app.services.auth_service import AuthService
from app.dependencies.auth import get_current_user
from app.schemas.user import UserLogin, UserRegister, UserResponse, TokenResponse, GoogleLoginRequest
from app.models.user import User


router = APIRouter(
    prefix="/api/v1/auth",
    tags=["Authentication"]
)

@router.post(
    "/register",
    response_model=TokenResponse
)
def register(
    data: UserRegister,
    db: Session = Depends(get_db)
):

    try:
        service = AuthService(db)

        user = service.register(data)

        access_token = create_access_token(
            str(user.id)
        )

        return {
            "access_token": access_token,
            "token_type": "bearer"
        }

    except ValueError as error:
        raise HTTPException(
            status_code=409,
            detail=str(error)
        )

@router.post("/login", response_model=TokenResponse)
def login(
    data: UserLogin,
    db: Session = Depends(get_db)
):

    try:
        service = AuthService(db)

        access_token = service.login(data)

        return {
            "access_token": access_token,
            "token_type": "bearer"
        }

    except ValueError as error:
        raise HTTPException(
            status_code=401,
            detail=str(error)
        )

@router.get("/me", response_model=UserResponse)
def get_me(
    current_user = Depends(get_current_user)
):
    return current_user

@router.delete("/account")
def delete_account(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    db.delete(current_user)
    db.commit()

    return {
        "message": "Account deleted successfully"
    }   

@router.post(
    "/google",
    response_model=TokenResponse
)
def google_login(
    data: GoogleLoginRequest,
    db: Session = Depends(get_db)
):

    try:
        service = AuthService(db)

        access_token = service.google_login(
            data.credential
        )

        return {
            "access_token": access_token,
            "token_type": "bearer"
        }

    except ValueError as error:
        raise HTTPException(
            status_code=401,
            detail=str(error)
        )