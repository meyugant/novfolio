from typing import Generic, TypeVar

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.database.base import Base


ModelType = TypeVar("ModelType", bound=Base)


class BaseRepository(Generic[ModelType]):

    def __init__(self, db: Session, model: type[ModelType]):
        self.db = db
        self.model = model

    def get_by_id(self, item_id):
        statement = select(self.model).where(
            self.model.id == item_id
        )

        return self.db.execute(statement).scalar_one_or_none()

    def get_all(self):
        statement = select(self.model)

        return self.db.execute(statement).scalars().all()

    def create(self, item: ModelType):
        self.db.add(item)
        self.db.commit()
        self.db.refresh(item)

        return item

    def delete(self, item: ModelType):
        self.db.delete(item)
        self.db.commit()