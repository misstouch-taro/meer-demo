# How to use meer

A 3-minute walkthrough of the **meer** desktop app.

## What you'll need

- A Windows 10 or 11 PC
- meer installed (from the [Microsoft Store](https://apps.microsoft.com/) — search "meer")
- _(Optional)_ A GitHub or GitLab account, if you want to access private repositories

> 💡 **You don't need to know Git.** meer is designed for browsing — not for command-line operations.

---

## Step 1 — Pick a provider

When you launch meer, you'll see two buttons at the top: **GitHub** and **GitLab**.
Click the one you want to use. You can switch later at any time.

## Step 2 — Connect

Type the username or organization name into the box next to the meer icon, then click **Connect**.

For **public repositories**, that's it — you're in.

For **private repositories**, open the **Settings** dialog (top-right) and paste a Personal Access Token (PAT):

| Provider | Required scope |
|---|---|
| GitHub | `repo` |
| GitLab | `read_api` |

Your token is encrypted locally using Windows DPAPI. **It never leaves your computer.**

## Step 3 — Pick a repository and branch

After connecting, two dropdowns appear:

1. **Repository** — choose from the list (or start typing to filter)
2. **Branch** — usually `main` or `master`

## Step 4 — Browse and preview

The left panel shows the file tree. Click a file to preview it on the right:

- Text files → syntax-highlighted preview
- Markdown → rendered with a source toggle
- Images → displayed inline

## Step 5 — Download

Two ways:

- **Single file**: right-click → **Download**
- **Whole branch as ZIP**: click the **ZIP** button in the top bar

---

## Keyboard tips

| Action | Shortcut |
|---|---|
| Multi-select files | `Ctrl + Click` |
| Range select | `Shift + Click` |
| Open file in default app | `Enter` or **Double-click** |
| Filter file list | Just start typing |

---

## Troubleshooting

**"Rate limit exceeded" message**
Without a token, GitHub allows 60 API requests per hour. Adding a PAT raises this to 5,000 per hour.

**Can't see private repositories**
Make sure your PAT includes the `repo` scope (GitHub) or `read_api` (GitLab).

**Need help?**
Open an issue on the [meer repository](https://github.com/misstouch-taro/meer/issues).
