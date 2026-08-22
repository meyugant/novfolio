from google.oauth2 import id_token
from google.auth.transport import requests

from app.config.settings import settings


def verify_google_token(credential: str):

    try:
        idinfo = id_token.verify_oauth2_token(
            credential,
            requests.Request(),
            settings.GOOGLE_CLIENT_ID
        )

        return idinfo

    except ValueError:
        raise ValueError("Invalid Google token")