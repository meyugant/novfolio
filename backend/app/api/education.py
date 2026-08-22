from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.dependencies.auth import get_current_user
from app.dependencies.database import get_db
from app.models.user import User
from app.schemas.education import (
    EducationCreate,
    EducationUpdate,
    EducationResponse
)
from app.services.education_service import EducationService


router = APIRouter(
    prefix="/api/v1/educations",
    tags=["Education"]
)


@router.post(
    "",
    response_model=EducationResponse,
    status_code=status.HTTP_201_CREATED
)
def create_education(
    data: EducationCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return EducationService.create_education(
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
    response_model=list[EducationResponse]
)
def get_educations(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return EducationService.get_educations(
            db=db,
            user_id=current_user.id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )


@router.put(
    "/{education_id}",
    response_model=EducationResponse
)
def update_education(
    education_id: UUID,
    data: EducationUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return EducationService.update_education(
            db=db,
            user_id=current_user.id,
            education_id=education_id,
            data=data
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )


@router.delete(
    "/{education_id}",
    status_code=status.HTTP_204_NO_CONTENT
)
def delete_education(
    education_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        EducationService.delete_education(
            db=db,
            user_id=current_user.id,
            education_id=education_id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )