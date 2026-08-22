from uuid import UUID

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.portfolio import Portfolio
from app.models.skill import Skill


class SkillService:

    @staticmethod
    def create_skill(
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

        skill = Skill(
            portfolio_id=portfolio.id,
            **data.model_dump()
        )

        db.add(skill)
        db.commit()
        db.refresh(skill)

        return skill

    @staticmethod
    def get_skills(
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
            select(Skill)
            .where(
                Skill.portfolio_id == portfolio.id
            )
            .order_by(
                Skill.display_order
            )
        ).all()

    @staticmethod
    def update_skill(
        db: Session,
        user_id: UUID,
        skill_id: UUID,
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

        skill = db.scalar(
            select(Skill).where(
                Skill.id == skill_id,
                Skill.portfolio_id == portfolio.id
            )
        )

        if not skill:
            raise ValueError(
                "Skill not found"
            )

        update_data = data.model_dump(
            exclude_unset=True
        )

        for field, value in update_data.items():
            setattr(skill, field, value)

        db.commit()
        db.refresh(skill)

        return skill

    @staticmethod
    def delete_skill(
        db: Session,
        user_id: UUID,
        skill_id: UUID
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

        skill = db.scalar(
            select(Skill).where(
                Skill.id == skill_id,
                Skill.portfolio_id == portfolio.id
            )
        )

        if not skill:
            raise ValueError(
                "Skill not found"
            )

        db.delete(skill)
        db.commit()