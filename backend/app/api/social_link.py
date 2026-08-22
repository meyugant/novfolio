from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.dependencies.auth import get_current_user
from app.dependencies.database import get_db
from app.models.user import User
from app.schemas.social_link import (
    SocialLinkCreate,
    SocialLinkUpdate,
    SocialLinkResponse
)
from app.services.social_link_service import SocialLinkService


router = APIRouter(
    prefix="/api/v1/social-links",
    tags=["Social Links"]
)


@router.post(
    "",
    response_model=SocialLinkResponse,
    status_code=status.HTTP_201_CREATED
)
def create_social_link(
    data: SocialLinkCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return SocialLinkService.create_social_link(
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
    response_model=list[SocialLinkResponse]
)
def get_social_links(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return SocialLinkService.get_social_links(
            db=db,
            user_id=current_user.id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )


@router.put(
    "/{social_link_id}",
    response_model=SocialLinkResponse
)
def update_social_link(
    social_link_id: UUID,
    data: SocialLinkUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        return SocialLinkService.update_social_link(
            db=db,
            user_id=current_user.id,
            social_link_id=social_link_id,
            data=data
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )


@router.delete(
    "/{social_link_id}",
    status_code=status.HTTP_204_NO_CONTENT
)
def delete_social_link(
    social_link_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        SocialLinkService.delete_social_link(
            db=db,
            user_id=current_user.id,
            social_link_id=social_link_id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )