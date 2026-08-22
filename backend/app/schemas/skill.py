from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field


class SkillCreate(BaseModel):

    name: str = Field(
        min_length=1,
        max_length=100
    )

    category: str | None = Field(
        default=None,
        max_length=100
    )

    proficiency: str | None = Field(
        default=None,
        max_length=50
    )

    display_order: int = 0


class SkillUpdate(BaseModel):

    name: str | None = Field(
        default=None,
        min_length=1,
        max_length=100
    )

    category: str | None = Field(
        default=None,
        max_length=100
    )

    proficiency: str | None = Field(
        default=None,
        max_length=50
    )

    display_order: int | None = None


class SkillResponse(BaseModel):

    id: UUID
    portfolio_id: UUID
    name: str
    category: str | None
    proficiency: str | None
    display_order: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )