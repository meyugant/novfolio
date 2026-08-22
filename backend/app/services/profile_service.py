from uuid import UUID

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.portfolio import Portfolio
from app.models.profile import Profile



class ProfileService:

    @staticmethod
    def create_profile(
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

        existing_profile = db.scalar(
            select(Profile).where(
                Profile.portfolio_id == portfolio.id
            )
        )

        if existing_profile:
            raise ValueError(
                "Profile already exists"
            )

        profile = Profile(
            portfolio_id=portfolio.id,
            **data.model_dump()
        )

        db.add(profile)
        db.commit()
        db.refresh(profile)

        return profile

    @staticmethod
    def get_profile(
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

        profile = db.scalar(
            select(Profile).where(
                Profile.portfolio_id == portfolio.id
            )
        )

        if not profile:
            raise ValueError(
                "Profile not found"
            )

        return profile

    @staticmethod
    def update_profile(
        db: Session,
        user_id: UUID,
        data
    ):

        portfolio = db.scalar(
            select(Portfolio).where(
                Portfolio.user_id == user_id
            )
        )

        if not  portfolio:
            raise ValueError(
                "Portfolio not found"
            )

        profile = db.scalar(
            select(Profile).where(
                Profile.portfolio_id == portfolio.id
            )
        )

        if not profile:
            raise ValueError(
                "Profile not found"
            )

    # Create profile if it does not exist
        if not profile:

            profile = Profile(
                portfolio_id=portfolio.id,
                **data.model_dump(exclude_unset=True)
            )

            db.add(profile)
            db.commit()
            db.refresh(profile)

            return profile

    # Update existing profile
        update_data = data.model_dump(
            exclude_unset=True
        )

        for field, value in update_data.items():
            setattr(profile, field, value)

        db.commit()
        db.refresh(profile)

        return profile

    @staticmethod
    def delete_profile(
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

        profile = db.scalar(
            select(Profile).where(
                Profile.portfolio_id == portfolio.id
            )
        )

        if not profile:
            raise ValueError(
                "Profile not found"
            )

        db.delete(profile)
        db.commit()