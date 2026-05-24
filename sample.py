"""sample.py — a tiny Python example for meer's preview demo."""

from dataclasses import dataclass
from typing import Iterable


@dataclass
class Repository:
    """A minimal representation of a code repository."""

    owner: str
    name: str
    is_private: bool = False
    default_branch: str = "main"

    @property
    def full_name(self) -> str:
        suffix = " (private)" if self.is_private else ""
        return f"{self.owner}/{self.name}{suffix}"


def list_public_repos(repos: Iterable[Repository]) -> list[Repository]:
    """Return only the public repositories."""
    return [r for r in repos if not r.is_private]


def greet(repo: Repository) -> str:
    return f"Hello from {repo.full_name}!"


if __name__ == "__main__":
    samples = [
        Repository("misstouch-taro", "meer"),
        Repository("misstouch-taro", "meer-demo"),
        Repository("misstouch-taro", "private-notes", is_private=True),
    ]

    for repo in list_public_repos(samples):
        print(greet(repo))
