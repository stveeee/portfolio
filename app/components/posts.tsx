import Link from 'next/link'
import { formatDate, getRepos } from 'app/repos/utils'

export async function Repos() {
  let allRepos = await getRepos()

  return (
    <div>
      {allRepos.map((repo: any) => (
        <div key={repo.id} className="mb-6">
          <h3 className="text-xl font-semibold">
            <Link href={repo.html_url} target="_blank">
              {repo.description}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  )
}
