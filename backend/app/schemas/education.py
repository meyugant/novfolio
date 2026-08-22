from datetime import date, datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, model_validator


class EducationCreate(BaseModel):

    institution: str = Field(
        min_length=1,
        max_length=200
    )

    degree: str = Field(
        min_length=1,
        max_length=200
    )

    field_of_study: str | None = Field(
        default=None,
        max_length=200
    )

    location: str | None = Field(
        default=None,
        max_length=150
    )

    start_date: date

    end_date: date | None = None

    description: str | None = None

    display_order: int = 0

    @model_validator(mode="after")
    def validate_dates(self):

        if self.end_date and self.end_date < self.start_date:
            raise ValueError(
                "End date cannot be before start date"
            )

        return self


class EducationUpdate(BaseModel):

    institution: str | None = Field(
        default=None,
        min_length=1,
        max_length=200
    )

    degree: str | None = Field(
        default=None,
        min_length=1,
        max_length=200
    )

    field_of_study: str | None = Field(
        default=None,
        max_length=200
    )

    location: str | None = Field(
        default=None,
        max_length=150
    )

    start_date: date | None = None

    end_date: date | None = None

    description: str | None = None

    display_order: int | None = None


class EducationResponse(BaseModel):

    id: UUID
    portfolio_id: UUID
    institution: str
    degree: str
    field_of_study: str | None
    location: str | None
    start_date: date
    end_date: date | None
    description: str | None
    display_order: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )