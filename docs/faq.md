# Frequently Asked Questions

## Do I need a GitHub account?

Not for public repositories. You can browse anything that's public without signing in.

For **private** repositories, you'll need a Personal Access Token.

## What's a Personal Access Token (PAT)?

A PAT is a long string of characters that proves you're you, without sharing your password.

You can create one in your GitHub or GitLab account settings.

| Provider | Scope to enable |
|---|---|
| GitHub | `repo` |
| GitLab | `read_api` |

## Is my token safe?

Yes. The token is encrypted on your computer using Windows DPAPI (the same system that protects your Wi-Fi passwords and other Windows credentials). It never leaves your machine.

## Does meer send data anywhere?

No. meer talks directly to GitHub or GitLab. The developer of meer receives nothing — no telemetry, no analytics, no error reports.

## Why is the API rate-limit badge important?

GitHub and GitLab limit how many requests you can make per hour:

- **Without a token**: 60 requests per hour (you'll hit this quickly when browsing)
- **With a token**: 5,000 requests per hour (plenty for normal use)

The badge in the status bar shows your remaining quota.

## Can I use meer at work?

If your company uses **GitHub Enterprise** or **self-hosted GitLab**, yes — just set the Server URL in Settings to point to your internal instance.

## How do I report a bug or request a feature?

Open an issue on the [meer repository](https://github.com/misstouch-taro/meer/issues).
