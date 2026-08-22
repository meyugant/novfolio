from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.dependencies.auth import get_current_user
from app.dependencies.database import get_db
from app.models.user import User
from app.schemas.experience import (
    ExperienceCreate,
    ExperienceUpdate,
    ExperienceResponse
)
from app.services.experience_service import ExperienceService


router = APIRouter(
    prefix="/api/v1/experiences",
    tags=["Experience"]
)


@router.post(
    "",
    response_model=ExperienceResponse,
    status_code=status.HTTP_201_CREATED
)
def create_experience(
    data: ExperienceCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return ExperienceService.create_experience(
            db=db,
            user_id=current_user.id,
            data=data
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )


@router.get(
    "",
    response_model=list[ExperienceResponse]
)
def get_experiences(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return ExperienceService.get_experiences(
            db=db,
            user_id=current_user.id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )


@router.put(
    "/{experience_id}",
    response_model=ExperienceResponse
)
def update_experience(
    experience_id: UUID,
    data: ExperienceUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return ExperienceService.update_experience(
            db=db,
            user_id=current_user.id,
            experience_id=experience_id,
            data=data
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )


@router.delete(
    "/{experience_id}",
    status_code=status.HTTP_204_NO_CONTENT
)
def delete_experience(
    experience_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        ExperienceService.delete_experience(
            db=db,
            user_id=current_user.id,
            experience_id=experience_id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )