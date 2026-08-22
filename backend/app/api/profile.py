from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.dependencies.auth import get_current_user
from app.dependencies.database import get_db
from app.models.user import User
from app.schemas.profile import (
    ProfileCreate,
    ProfileUpdate,
    ProfileResponse
)
from app.services.profile_service import ProfileService


router = APIRouter(
    prefix="/api/v1/profile",
    tags=["Profile"]
)


@router.post(
    "",
    response_model=ProfileResponse,
    status_code=status.HTTP_201_CREATED
)
def create_profile(
    data: ProfileCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return ProfileService.create_profile(
            db=db,
            user_id=current_user.id,
            data=data
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=str(e)
        )


@router.get(
    "",
    response_model=ProfileResponse
)
def get_profile(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return ProfileService.get_profile(
            db=db,
            user_id=current_user.id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )


@router.put(
    "",
    response_model=ProfileResponse
)
def update_profile(
    data: ProfileUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return ProfileService.update_profile(
            db=db,
            user_id=current_user.id,
            data=data
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )


@router.delete(
    "",
    status_code=status.HTTP_204_NO_CONTENT
)
def delete_profile(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        ProfileService.delete_profile(
            db=db,
            user_id=current_user.id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )