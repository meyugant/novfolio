from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field


class SocialLinkCreate(BaseModel):

    platform: str = Field(
        min_length=1,
        max_length=100
    )

    url: str = Field(
        min_length=1,
        max_length=500
    )

    display_order: int = 0


class SocialLinkUpdate(BaseModel):

    platform: str | None = Field(
        default=None,
        min_length=1,
        max_length=100
    )

    url: str | None = Field(
        default=None,
        min_length=1,
        max_length=500
    )

    display_order: int | None = None


class SocialLinkResponse(BaseModel):

    id: UUID
    portfolio_id: UUID
    platform: str
    url: str
    display_order: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )