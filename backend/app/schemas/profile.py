from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field


class ProfileCreate(BaseModel):

    full_name: str = Field(
        min_length=1,
        max_length=150
    )

    headline: str | None = Field(
        default=None,
        max_length=200
    )

    bio: str | None = None

    location: str | None = Field(
        default=None,
        max_length=150
    )

    profile_image: str | None = Field(
        default=None,
        max_length=500
    )

    phone: str | None = Field(
        default=None,
        max_length=30
    )

    email: str | None = Field(
        default=None,
        max_length=255
    )


class ProfileUpdate(BaseModel):

    full_name: str | None = Field(
        default=None,
        min_length=1,
        max_length=150
    )

    headline: str | None = Field(
        default=None,
        max_length=200
    )

    bio: str | None = None

    location: str | None = Field(
        default=None,
        max_length=150
    )

    profile_image: str | None = Field(
        default=None,
        max_length=500
    )

    phone: str | None = Field(
        default=None,
        max_length=30
    )

    email: str | None = Field(
        default=None,
        max_length=255
    )


class ProfileResponse(BaseModel):

    id: UUID
    portfolio_id: UUID
    full_name: str
    headline: str | None
    bio: str | None
    location: str | None
    profile_image: str | None
    phone: str | None
    email: str | None
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )