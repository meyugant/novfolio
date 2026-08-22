import os

import pytest
from dotenv import load_dotenv

load_dotenv()

from sqlalchemy import create_engine, delete
from sqlalchemy.orm import sessionmaker
from fastapi.testclient import TestClient

from app.dependencies.database import get_db
from app.main import app
from app.models.user import User


TEST_DATABASE_URL = os.getenv("TEST_DATABASE_URL")

if not TEST_DATABASE_URL:
    raise RuntimeError(
        "TEST_DATABASE_URL is not configured"
    )


engine = create_engine(
    TEST_DATABASE_URL,
    pool_pre_ping=True
)


TestingSessionLocal = sessionmaker(
    bind=engine,
    autocommit=False,
    autoflush=False
)


def override_get_db():

    db = TestingSessionLocal()

    try:
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db


@pytest.fixture(autouse=True)
def clean_database():

    db = TestingSessionLocal()

    db.execute(delete(User))

    db.commit()

    db.close()

    yield

    db = TestingSessionLocal()

    db.execute(delete(User))

    db.commit()

    db.close()


@pytest.fixture
def client():

    return TestClient(app)