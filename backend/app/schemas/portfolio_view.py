from datetime import date, datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict

from app.schemas.portfolio import PortfolioResponse
from app.schemas.profile import ProfileResponse
from app.schemas.project import ProjectResponse
from app.schemas.experience import ExperienceResponse
from app.schemas.education import EducationResponse
from app.schemas.skill import SkillResponse
from app.schemas.social_link import SocialLinkResponse


class PublicPortfolioInfo(BaseModel):

    id: UUID
    slug: str
    title: str
    template: str

    model_config = ConfigDict(
        from_attributes=True
    )


class PublicProfile(BaseModel):

    id: UUID
    full_name: str
    headline: str | None
    bio: str | None
    location: str | None
    profile_image: str | None
    phone: str | None
    email: str | None

    model_config = ConfigDict(
        from_attributes=True
    )


class PublicProject(BaseModel):

    id: UUID
    title: str
    description: str | None
    technologies: list[str]
    project_url: str | None
    github_url: str | None
    image_url: str | None
    is_featured: bool
    display_order: int

    model_config = ConfigDict(
        from_attributes=True
    )


class PublicExperience(BaseModel):

    id: UUID
    organization: str
    role: str
    employment_type: str | None
    location: str | None
    start_date: date
    end_date: date | None
    is_current: bool
    description: str | None
    display_order: int

    model_config = ConfigDict(
        from_attributes=True
    )


class PublicEducation(BaseModel):

    id: UUID
    institution: str
    degree: str
    field_of_study: str | None
    location: str | None
    start_date: date
    end_date: date | None
    description: str | None
    display_order: int

    model_config = ConfigDict(
        from_attributes=True
    )


class PublicSkill(BaseModel):

    id: UUID
    name: str
    category: str | None
    proficiency: str | None
    display_order: int

    model_config = ConfigDict(
        from_attributes=True
    )


class PublicSocialLink(BaseModel):

    id: UUID
    platform: str
    url: str
    display_order: int

    model_config = ConfigDict(
        from_attributes=True
    )


class PublicPortfolioResponse(BaseModel):

    portfolio: PublicPortfolioInfo
    profile: PublicProfile | None
    projects: list[PublicProject]
    experiences: list[PublicExperience]
    educations: list[PublicEducation]
    skills: list[PublicSkill]
    social_links: list[PublicSocialLink]


class MyPortfolioResponse(BaseModel):

    portfolio: PortfolioResponse
    profile: ProfileResponse | None
    projects: list[ProjectResponse]
    experiences: list[ExperienceResponse]
    educations: list[EducationResponse]
    skills: list[SkillResponse]
    social_links: list[SocialLinkResponse]