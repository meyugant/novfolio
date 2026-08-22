import uuid
from datetime import date, datetime, timezone

from sqlalchemy import Boolean, Date, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base


class Experience(Base):

    __tablename__ = "experiences"

    id: Mapped[uuid.UUID] = mapped_column(
        primary_key=True,
        default=uuid.uuid4
    )

    portfolio_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey(
            "portfolios.id",
            ondelete="CASCADE"
        ),
        nullable=False
    )

    organization: Mapped[str] = mapped_column(
        String(200),
        nullable=False
    )

    role: Mapped[str] = mapped_column(
        String(200),
        nullable=False
    )

    employment_type: Mapped[str | None] = mapped_column(
        String(50),
        nullable=True
    )

    location: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True
    )

    start_date: Mapped[date] = mapped_column(
        Date,
        nullable=False
    )

    end_date: Mapped[date | None] = mapped_column(
        Date,
        nullable=True
    )

    is_current: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
        nullable=False
    )

    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )

    display_order: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc)
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc)
    )

    portfolio = relationship(
        "Portfolio",
        back_populates="experiences"
    )