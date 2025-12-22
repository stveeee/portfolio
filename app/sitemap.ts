import { getRepos } from 'app/repos/utils'

export const baseUrl = 'https://steve-portfolio'

export default async function sitemap() {
  let routes = ['', '/repos'].map((route) => ({
    url: `${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
