import { Repos } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Steve Johnston
      </h1>
      <p className="mb-4">
        {`This is a portfolio showcasing my latest projects. You can view my list of public repositories by navigating to the Repos page.`}
      </p>
    </section>
  )
}
