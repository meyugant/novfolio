from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field


class PortfolioCreate(BaseModel):

    slug: str = Field(
        min_length=3,
        max_length=100
    )

    title: str = Field(
        min_length=1,
        max_length=150
    )

    template: str = Field(
        default="default",
        max_length=50
    )


class PortfolioResponse(BaseModel):

    id: UUID
    user_id: UUID
    slug: str
    title: str
    template: str
    is_published: bool
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )