from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.schemas.portfolio_view import MyPortfolioResponse, PublicPortfolioResponse

from app.dependencies.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.schemas.portfolio import (
    PortfolioCreate,
    PortfolioResponse
)
from app.services.portfolio_service import PortfolioService


router = APIRouter(
    prefix="/api/v1/portfolios",
    tags=["Portfolios"]
)


@router.post(
    "",
    response_model=PortfolioResponse,
    status_code=status.HTTP_201_CREATED
)
def create_portfolio(
    data: PortfolioCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        portfolio = PortfolioService.create_portfolio(
            db=db,
            user_id=current_user.id,
            slug=data.slug,
            title=data.title,
            template=data.template
        )

        return portfolio

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=str(e)
        )


@router.get(
    "/me",
    response_model=MyPortfolioResponse
)
def get_my_portfolio(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    portfolio = PortfolioService.get_user_portfolio(
        db=db,
        user_id=current_user.id
    )

    if not portfolio:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Portfolio not found"
        )

    return {
        "portfolio": portfolio,
        "profile": portfolio.profile,
        "projects": portfolio.projects,
        "experiences": portfolio.experiences,
        "educations": portfolio.educations,
        "skills": portfolio.skills,
        "social_links": portfolio.social_links
    }


@router.get(
    "/public/{slug}",
    response_model=PublicPortfolioResponse
)
def get_public_portfolio(
    slug: str,
    db: Session = Depends(get_db)
):

    portfolio = PortfolioService.get_public_portfolio(
        db=db,
        slug=slug
    )

    if not portfolio:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Portfolio not found"
        )

    return {
        "portfolio": portfolio,
        "profile": portfolio.profile,
        "projects": portfolio.projects,
        "experiences": portfolio.experiences,
        "educations": portfolio.educations,
        "skills": portfolio.skills,
        "social_links": portfolio.social_links
    }

@router.post(
    "/publish",
    response_model=PortfolioResponse
)
def publish_portfolio(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        portfolio = PortfolioService.publish_portfolio(
            db=db,
            user_id=current_user.id
        )

        return portfolio

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )

@router.post(
    "/unpublish",
    response_model=PortfolioResponse
)
def unpublish_portfolio(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    try:

        portfolio = PortfolioService.unpublish_portfolio(
            db=db,
            user_id=current_user.id
        )

        return portfolio

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )