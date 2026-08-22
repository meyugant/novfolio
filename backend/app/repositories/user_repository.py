from select import select

from app.models.user import User
from app.repositories.base_repository import BaseRepository


class UserRepository(BaseRepository[User]):

    def __init__(self, db):
        super().__init__(db, User)

    def get_by_email(self, email: str):
        from sqlalchemy import select

        statement = select(User).where(
            User.email == email
        )

        return self.db.execute(statement).scalar_one_or_none()

    def get_by_google_id(self, google_id: str):

        from sqlalchemy import select

        statement = select(User).where(
            User.google_id == google_id
        )

        return self.db.execute(statement).scalar_one_or_none()