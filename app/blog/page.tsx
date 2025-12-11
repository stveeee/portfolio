import { Repos } from 'app/components/posts'

export const metadata = {
  title: 'Repositories',
  description: 'Here are my public GitHub repositories.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Repositories</h1>
      <Repos />
    </section>
  )
}
