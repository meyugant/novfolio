from uuid import UUID

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.experience import Experience
from app.models.portfolio import Portfolio


class ExperienceService:

    @staticmethod
    def create_experience(
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

        experience = Experience(
            portfolio_id=portfolio.id,
            **data.model_dump()
        )

        db.add(experience)
        db.commit()
        db.refresh(experience)

        return experience

    @staticmethod
    def get_experiences(
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
            select(Experience)
            .where(
                Experience.portfolio_id == portfolio.id
            )
            .order_by(
                Experience.display_order
            )
        ).all()

    @staticmethod
    def update_experience(
        db: Session,
        user_id: UUID,
        experience_id: UUID,
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

        experience = db.scalar(
            select(Experience).where(
                Experience.id == experience_id,
                Experience.portfolio_id == portfolio.id
            )
        )

        if not experience:
            raise ValueError(
                "Experience not found"
            )

        update_data = data.model_dump(
            exclude_unset=True
        )

        for field, value in update_data.items():
            setattr(experience, field, value)

        db.commit()
        db.refresh(experience)

        return experience

    @staticmethod
    def delete_experience(
        db: Session,
        user_id: UUID,
        experience_id: UUID
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

        experience = db.scalar(
            select(Experience).where(
                Experience.id == experience_id,
                Experience.portfolio_id == portfolio.id
            )
        )

        if not experience:
            raise ValueError(
                "Experience not found"
            )

        db.delete(experience)
        db.commit()