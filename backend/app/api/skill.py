from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.dependencies.auth import get_current_user
from app.dependencies.database import get_db
from app.models.user import User
from app.schemas.skill import (
    SkillCreate,
    SkillUpdate,
    SkillResponse
)
from app.services.skill_service import SkillService


router = APIRouter(
    prefix="/api/v1/skills",
    tags=["Skills"]
)


@router.post(
    "",
    response_model=SkillResponse,
    status_code=status.HTTP_201_CREATED
)
def create_skill(
    data: SkillCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return SkillService.create_skill(
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
    response_model=list[SkillResponse]
)
def get_skills(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return SkillService.get_skills(
            db=db,
            user_id=current_user.id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )


@router.put(
    "/{skill_id}",
    response_model=SkillResponse
)
def update_skill(
    skill_id: UUID,
    data: SkillUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return SkillService.update_skill(
            db=db,
            user_id=current_user.id,
            skill_id=skill_id,
            data=data
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )


@router.delete(
    "/{skill_id}",
    status_code=status.HTTP_204_NO_CONTENT
)
def delete_skill(
    skill_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        SkillService.delete_skill(
            db=db,
            user_id=current_user.id,
            skill_id=skill_id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )