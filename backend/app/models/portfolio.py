import uuid
from datetime import datetime

from sqlalchemy import Boolean, DateTime, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base


class Portfolio(Base):

    __tablename__ = "portfolios"

    id: Mapped[uuid.UUID] = mapped_column(
        primary_key=True,
        default=uuid.uuid4
    )

    user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"),
        unique=True,
        nullable=False
    )

    slug: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        nullable=False
    )

    title: Mapped[str] = mapped_column(
        String(150),
        nullable=False
    )

    template: Mapped[str] = mapped_column(
        String(50),
        default="default",
        nullable=False
    )

    is_published: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
        nullable=False
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=datetime.utcnow
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )

    user = relationship(
        "User",
        back_populates="portfolio"
    )

    profile = relationship(
        "Profile",
        back_populates="portfolio",
        uselist=False,
        cascade="all, delete-orphan"
    )

    projects = relationship(
        "Project",
        back_populates="portfolio",
        cascade="all, delete-orphan",
        order_by="Project.display_order"
    )

    experiences = relationship(
        "Experience",
        back_populates="portfolio",
        cascade="all, delete-orphan",
        order_by="Experience.display_order"
    )

    educations = relationship(
        "Education",
        back_populates="portfolio",
        cascade="all, delete-orphan",
        order_by="Education.display_order"
    )

    skills = relationship(
        "Skill",
        back_populates="portfolio",
        cascade="all, delete-orphan",
        order_by="Skill.display_order"
    )

    social_links = relationship(
        "SocialLink",
        back_populates="portfolio",
        cascade="all, delete-orphan",
        order_by="SocialLink.display_order"
    )