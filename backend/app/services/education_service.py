from uuid import UUID

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.education import Education
from app.models.portfolio import Portfolio


class EducationService:

    @staticmethod
    def create_education(
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

        education = Education(
            portfolio_id=portfolio.id,
            **data.model_dump()
        )

        db.add(education)
        db.commit()
        db.refresh(education)

        return education

    @staticmethod
    def get_educations(
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
            select(Education)
            .where(
                Education.portfolio_id == portfolio.id
            )
            .order_by(
                Education.display_order
            )
        ).all()

    @staticmethod
    def update_education(
        db: Session,
        user_id: UUID,
        education_id: UUID,
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

        education = db.scalar(
            select(Education).where(
                Education.id == education_id,
                Education.portfolio_id == portfolio.id
            )
        )

        if not education:
            raise ValueError(
                "Education not found"
            )

        update_data = data.model_dump(
            exclude_unset=True
        )

        for field, value in update_data.items():
            setattr(education, field, value)

        db.commit()
        db.refresh(education)

        return education

    @staticmethod
    def delete_education(
        db: Session,
        user_id: UUID,
        education_id: UUID
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

        education = db.scalar(
            select(Education).where(
                Education.id == education_id,
                Education.portfolio_id == portfolio.id
            )
        )

        if not education:
            raise ValueError(
                "Education not found"
            )

        db.delete(education)
        db.commit()