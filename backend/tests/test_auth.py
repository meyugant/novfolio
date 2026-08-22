def test_register(client):

    response = client.post(
        "/api/v1/auth/register",
        json={
            "email": "testuser@example.com",
            "password": "TestPassword123"
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert "access_token" in data
    assert data["token_type"] == "bearer"

def test_duplicate_registration(client):

    user = {
        "email": "duplicate@example.com",
        "password": "TestPassword123"
    }

    first_response = client.post(
        "/api/v1/auth/register",
        json=user
    )

    second_response = client.post(
        "/api/v1/auth/register",
        json=user
    )

    assert first_response.status_code == 200
    assert second_response.status_code == 409


def test_login(client):

    client.post(
        "/api/v1/auth/register",
        json={
            "email": "login@example.com",
            "password": "TestPassword123"
        }
    )

    response = client.post(
        "/api/v1/auth/login",
        json={
            "email": "login@example.com",
            "password": "TestPassword123"
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert "access_token" in data
    assert data["token_type"] == "bearer"


def test_wrong_password(client):

    client.post(
        "/api/v1/auth/register",
        json={
            "email": "wrongpass@example.com",
            "password": "TestPassword123"
        }
    )

    response = client.post(
        "/api/v1/auth/login",
        json={
            "email": "wrongpass@example.com",
            "password": "WrongPassword123"
        }
    )

    assert response.status_code == 401


def test_get_current_user(client):

    client.post(
        "/api/v1/auth/register",
        json={
            "email": "me@example.com",
            "password": "TestPassword123"
        }
    )

    login_response = client.post(
        "/api/v1/auth/login",
        json={
            "email": "me@example.com",
            "password": "TestPassword123"
        }
    )

    token = login_response.json()["access_token"]

    response = client.get(
        "/api/v1/auth/me",
        headers={
            "Authorization": f"Bearer {token}"
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert data["email"] == "me@example.com"
    assert "password_hash" not in data


def test_get_current_user_without_token(client):

    response = client.get(
        "/api/v1/auth/me"
    )

    assert response.status_code == 401