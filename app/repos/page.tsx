import Link from 'next/link'
import { getRepos } from 'app/blog/utils'

export default async function Page() {
  const repos = await getRepos()

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Repositories
      </h1>
      <ul className="space-y-4">
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <Link
              href={repo.html_url}
              target="_blank"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
            >
              <h3 className="text-lg font-semibold">{repo.description}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
