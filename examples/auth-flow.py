"""examples/auth-flow.py

A tiny illustration of an OAuth-like authentication flow.
Used for meer's preview demo — not real meer code.
"""

from dataclasses import dataclass
from typing import Optional
import secrets
import time


@dataclass
class Session:
    """Represents an authenticated user session."""

    user_login: str
    token: str
    issued_at: float
    expires_in: int = 3600  # seconds

    @property
    def is_expired(self) -> bool:
        return time.time() > self.issued_at + self.expires_in


class AuthService:
    """A toy auth service that mints and validates session tokens."""

    def __init__(self) -> None:
        self._sessions: dict[str, Session] = {}

    def login(self, user_login: str) -> Session:
        """Create a session for the given user."""
        token = secrets.token_urlsafe(32)
        session = Session(
            user_login=user_login,
            token=token,
            issued_at=time.time(),
        )
        self._sessions[token] = session
        return session

    def validate(self, token: str) -> Optional[Session]:
        """Return the active session for a token, or None if invalid or expired."""
        session = self._sessions.get(token)
        if session is None or session.is_expired:
            return None
        return session

    def logout(self, token: str) -> None:
        self._sessions.pop(token, None)


if __name__ == "__main__":
    auth = AuthService()
    s = auth.login("misstouch-taro")
    print(f"Logged in as {s.user_login}")
    print(f"Token: {s.token[:8]}... (expires in {s.expires_in}s)")

    found = auth.validate(s.token)
    assert found is not None
    print(f"Validated session for {found.user_login}")
