from uuid import UUID

from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.models.portfolio import Portfolio
# from backend.app.schemas import portfolio


class PortfolioService:

    @staticmethod
    def create_portfolio(
        db: Session,
        user_id: UUID,
        slug: str,
        title: str,
        template: str
    ):

        existing_portfolio = db.scalar(
            select(Portfolio).where(
                Portfolio.user_id == user_id
            )
        )

        if existing_portfolio:
            raise ValueError(
                "User already has a portfolio"
            )

        existing_slug = db.scalar(
            select(Portfolio).where(
                Portfolio.slug == slug
            )
        )

        if existing_slug:
            raise ValueError(
                "Portfolio slug is already taken"
            )

        portfolio = Portfolio(
            user_id=user_id,
            slug=slug,
            title=title,
            template=template
        )

        db.add(portfolio)
        db.commit()
        db.refresh(portfolio)

        return portfolio

    @staticmethod
    def get_user_portfolio(
        db: Session,
        user_id: UUID
    ):

        return db.scalar(
            select(Portfolio).where(
                Portfolio.user_id == user_id
            )
        )

    @staticmethod
    def get_public_portfolio(
        db: Session,
        slug: str
    ):

        portfolio = db.scalar(
            select(Portfolio)
            .options(
                selectinload(Portfolio.profile),
                selectinload(Portfolio.projects),
                selectinload(Portfolio.experiences),
                selectinload(Portfolio.educations),
                selectinload(Portfolio.skills),
                selectinload(Portfolio.social_links)
            )
            .where(
                Portfolio.slug == slug,
                Portfolio.is_published == True
            )
    )

        return portfolio

    @staticmethod
    def publish_portfolio(
        db: Session,
        user_id: UUID
    ):
        portfolio = db.scalar(
        select(Portfolio).where(
            Portfolio.user_id == user_id
        )
    )

        if not portfolio:
            raise ValueError("Portfolio not found")

        portfolio.is_published = True

        db.commit()
        db.refresh(portfolio)

        return portfolio


    @staticmethod
    def unpublish_portfolio(
    db: Session,
    user_id: UUID
    ):
        portfolio = db.scalar(
            select(Portfolio).where(
                Portfolio.user_id == user_id
            )
        )

        if not portfolio:
            raise ValueError("Portfolio not found")

        portfolio.is_published = False

        db.commit()
        db.refresh(portfolio)

        return portfolio


    @staticmethod
    def get_my_portfolio(
        db: Session,
        user_id: UUID
    ):

        portfolio = db.scalar(
                select(Portfolio)
                .options(
                selectinload(Portfolio.profile),
                selectinload(Portfolio.projects),
                selectinload(Portfolio.experiences),
                selectinload(Portfolio.educations),
                selectinload(Portfolio.skills),
                selectinload(Portfolio.social_links)
            )
            .where(
                Portfolio.user_id == user_id
            )
        )

        return portfolio