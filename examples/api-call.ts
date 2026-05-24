// examples/api-call.ts
// A small example showing how a TypeScript app might call a REST API.
// Used here for meer's preview demo — not a real meer code file.

interface User {
  id: number
  login: string
  name: string
  avatarUrl: string
}

interface FetchOptions {
  token?: string
  timeoutMs?: number
}

async function fetchUser(
  login: string,
  options: FetchOptions = {},
): Promise<User> {
  const { token, timeoutMs = 5000 } = options
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const res = await fetch(`https://api.github.com/users/${login}`, {
      headers,
      signal: controller.signal,
    })
    if (!res.ok) {
      throw new Error(`Request failed: ${res.status} ${res.statusText}`)
    }
    const data = await res.json()
    return {
      id: data.id,
      login: data.login,
      name: data.name ?? login,
      avatarUrl: data.avatar_url,
    }
  } finally {
    clearTimeout(timer)
  }
}

// Example usage
async function main() {
  const user = await fetchUser('misstouch-taro')
  console.log(`Hello, ${user.name}!`)
}

main().catch((err) => {
  console.error('failed:', err.message)
  process.exit(1)
})
