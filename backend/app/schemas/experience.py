from datetime import date, datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, model_validator


class ExperienceCreate(BaseModel):

    organization: str = Field(
        min_length=1,
        max_length=200
    )

    role: str = Field(
        min_length=1,
        max_length=200
    )

    employment_type: str | None = Field(
        default=None,
        max_length=50
    )

    location: str | None = Field(
        default=None,
        max_length=150
    )

    start_date: date

    end_date: date | None = None

    is_current: bool = False

    description: str | None = None

    display_order: int = 0

    @model_validator(mode="after")
    def validate_dates(self):

        if self.end_date and self.end_date < self.start_date:
            raise ValueError(
                "End date cannot be before start date"
            )

        if self.is_current and self.end_date is not None:
            raise ValueError(
                "Current experience cannot have an end date"
            )

        return self


class ExperienceUpdate(BaseModel):

    organization: str | None = Field(
        default=None,
        min_length=1,
        max_length=200
    )

    role: str | None = Field(
        default=None,
        min_length=1,
        max_length=200
    )

    employment_type: str | None = Field(
        default=None,
        max_length=50
    )

    location: str | None = Field(
        default=None,
        max_length=150
    )

    start_date: date | None = None

    end_date: date | None = None

    is_current: bool | None = None

    description: str | None = None

    display_order: int | None = None


class ExperienceResponse(BaseModel):

    id: UUID
    portfolio_id: UUID
    organization: str
    role: str
    employment_type: str | None
    location: str | None
    start_date: date
    end_date: date | None
    is_current: bool
    description: str | None
    display_order: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )