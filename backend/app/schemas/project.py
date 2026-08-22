from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field


class ProjectCreate(BaseModel):

    title: str = Field(
        min_length=1,
        max_length=150
    )

    description: str | None = None

    technologies: list[str] = Field(
        default_factory=list
    )

    project_url: str | None = Field(
        default=None,
        max_length=500
    )

    github_url: str | None = Field(
        default=None,
        max_length=500
    )

    image_url: str | None = Field(
        default=None,
        max_length=500
    )

    is_featured: bool = False

    display_order: int = 0


class ProjectUpdate(BaseModel):

    title: str | None = Field(
        default=None,
        min_length=1,
        max_length=150
    )

    description: str | None = None

    technologies: list[str] | None = None

    project_url: str | None = Field(
        default=None,
        max_length=500
    )

    github_url: str | None = Field(
        default=None,
        max_length=500
    )

    image_url: str | None = Field(
        default=None,
        max_length=500
    )

    is_featured: bool | None = None

    display_order: int | None = None


class ProjectResponse(BaseModel):

    id: UUID
    portfolio_id: UUID
    title: str
    description: str | None
    technologies: list[str]
    project_url: str | None
    github_url: str | None
    image_url: str | None
    is_featured: bool
    display_order: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )