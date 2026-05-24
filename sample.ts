// sample.ts — a small TypeScript example for meer's preview demo

type Repository = {
  owner: string
  name: string
  isPrivate: boolean
  defaultBranch: string
}

type Branch = {
  name: string
  commit: string
}

/**
 * A friendly helper that formats a repository's full name
 * with an optional visibility marker.
 */
export function formatRepoName(repo: Repository): string {
  const visibility = repo.isPrivate ? ' (private)' : ''
  return `${repo.owner}/${repo.name}${visibility}`
}

/**
 * Find the default branch from a list, falling back to "main".
 */
export function pickDefaultBranch(
  branches: Branch[],
  hint?: string,
): Branch | undefined {
  if (hint) {
    const found = branches.find((b) => b.name === hint)
    if (found) return found
  }
  return (
    branches.find((b) => b.name === 'main') ??
    branches.find((b) => b.name === 'master') ??
    branches[0]
  )
}

// Example usage
const repos: Repository[] = [
  { owner: 'misstouch-taro', name: 'meer', isPrivate: false, defaultBranch: 'main' },
  { owner: 'misstouch-taro', name: 'meer-demo', isPrivate: false, defaultBranch: 'main' },
]

for (const repo of repos) {
  console.log(formatRepoName(repo))
}
