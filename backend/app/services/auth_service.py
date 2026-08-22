from sqlalchemy.orm import Session
from app.auth.oauth import verify_google_token
from app.auth.hashing import hash_password, verify_password
from app.auth.jwt import create_access_token
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.user import UserLogin, UserRegister


class AuthService:

    def __init__(self, db: Session):
        self.user_repository = UserRepository(db)

    def register(self, data: UserRegister):

        existing_user = self.user_repository.get_by_email(
            data.email
        )

        if existing_user:
            raise ValueError("Email is already registered")

        password_hash = hash_password(data.password)

        user = User(
            email=data.email,
            password_hash=password_hash
        )

        return self.user_repository.create(user)

    def login(self, data: UserLogin):

        user = self.user_repository.get_by_email(
            data.email
        )

        if not user:
            raise ValueError("Invalid email or password")

        if not verify_password(
            data.password,
            user.password_hash
        ):
            raise ValueError("Invalid email or password")

        access_token = create_access_token(
            str(user.id)
        )

        return access_token

    def google_login(self, credential: str):

        idinfo = verify_google_token(credential)

        google_id = idinfo.get("sub")
        email = idinfo.get("email")
        email_verified = idinfo.get("email_verified", False)

        if not google_id or not email:
            raise ValueError("Invalid Google account information")

        if not email_verified:
            raise ValueError("Google email is not verified")

        # Check Google account first
        user = self.user_repository.get_by_google_id(
            google_id
        )

        if user:
            access_token = create_access_token(
                str(user.id)
            )

            return access_token

        # Check whether this email already exists
        user = self.user_repository.get_by_email(
            email
        )

        if user:

            # Link Google to the existing account
            user.google_id = google_id
            user.is_verified = True

            self.user_repository.db.commit()
            self.user_repository.db.refresh(user)

        else:

            # Create a completely new Google user
            user = User(
                email=email,
                password_hash=None,
                google_id=google_id,
                is_verified=True
            )

            user = self.user_repository.create(user)

        access_token = create_access_token(
            str(user.id)
        )

        return access_token