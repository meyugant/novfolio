from uuid import UUID

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.portfolio import Portfolio
from app.models.social_link import SocialLink


class SocialLinkService:

    @staticmethod
    def create_social_link(
        db: Session,
        user_id: UUID,
        data
    ):

        portfolio = db.scalar(
            select(Portfolio).where(
                Portfolio.user_id == user_id
            )
        )

        if not portfolio:
            raise ValueError(
                "Portfolio not found"
            )

        social_link = SocialLink(
            portfolio_id=portfolio.id,
            **data.model_dump()
        )

        db.add(social_link)
        db.commit()
        db.refresh(social_link)

        return social_link

    @staticmethod
    def get_social_links(
        db: Session,
        user_id: UUID
    ):

        portfolio = db.scalar(
            select(Portfolio).where(
                Portfolio.user_id == user_id
            )
        )

        if not portfolio:
            raise ValueError(
                "Portfolio not found"
            )

        return db.scalars(
            select(SocialLink)
            .where(
                SocialLink.portfolio_id == portfolio.id
            )
            .order_by(
                SocialLink.display_order
            )
        ).all()

    @staticmethod
    def update_social_link(
        db: Session,
        user_id: UUID,
        social_link_id: UUID,
        data
    ):

        portfolio = db.scalar(
            select(Portfolio).where(
                Portfolio.user_id == user_id
            )
        )

        if not portfolio:
            raise ValueError(
                "Portfolio not found"
            )

        social_link = db.scalar(
            select(SocialLink).where(
                SocialLink.id == social_link_id,
                SocialLink.portfolio_id == portfolio.id
            )
        )

        if not social_link:
            raise ValueError(
                "Social link not found"
            )

        update_data = data.model_dump(
            exclude_unset=True
        )

        for field, value in update_data.items():
            setattr(social_link, field, value)

        db.commit()
        db.refresh(social_link)

        return social_link

    @staticmethod
    def delete_social_link(
        db: Session,
        user_id: UUID,
        social_link_id: UUID
    ):

        portfolio = db.scalar(
            select(Portfolio).where(
                Portfolio.user_id == user_id
            )
        )

        if not portfolio:
            raise ValueError(
                "Portfolio not found"
            )

        social_link = db.scalar(
            select(SocialLink).where(
                SocialLink.id == social_link_id,
                SocialLink.portfolio_id == portfolio.id
            )
        )

        if not social_link:
            raise ValueError(
                "Social link not found"
            )

        db.delete(social_link)
        db.commit()