from uuid import UUID

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.portfolio import Portfolio
from app.models.project import Project


class ProjectService:

    @staticmethod
    def create_project(
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

        project = Project(
            portfolio_id=portfolio.id,
            **data.model_dump()
        )

        db.add(project)
        db.commit()
        db.refresh(project)

        return project

    @staticmethod
    def get_projects(
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
            select(Project)
            .where(
                Project.portfolio_id == portfolio.id
            )
            .order_by(
                Project.display_order
            )
        ).all()

    @staticmethod
    def update_project(
        db: Session,
        user_id: UUID,
        project_id: UUID,
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

        project = db.scalar(
            select(Project).where(
                Project.id == project_id,
                Project.portfolio_id == portfolio.id
            )
        )

        if not project:
            raise ValueError(
                "Project not found"
            )

        update_data = data.model_dump(
            exclude_unset=True
        )

        for field, value in update_data.items():
            setattr(project, field, value)

        db.commit()
        db.refresh(project)

        return project

    @staticmethod
    def delete_project(
        db: Session,
        user_id: UUID,
        project_id: UUID
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

        project = db.scalar(
            select(Project).where(
                Project.id == project_id,
                Project.portfolio_id == portfolio.id
            )
        )

        if not project:
            raise ValueError(
                "Project not found"
            )

        db.delete(project)
        db.commit()