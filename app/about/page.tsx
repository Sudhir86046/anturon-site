export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            About
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Building practical AI voice systems for sales teams
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Anturon is focused on helping businesses automate repetitive calling
            workflows, qualify leads faster, and give human teams more time for
            real conversations that drive revenue.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Why Anturon exists
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Many sales teams lose time and momentum on repetitive outreach,
              delayed follow-ups, and inconsistent qualification. Anturon was
              created to solve that gap with voice AI systems that are fast,
              scalable, and aligned with real business workflows.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
              Our Goal
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Keep humans focused on high-value conversations
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              We believe AI should not replace good sales teams. It should help
              them work better by handling repetitive first-touch interactions,
              capturing structured insights, and surfacing the right leads at
              the right time.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-2xl font-bold">Mission</h3>
            <p className="mt-3 text-slate-300">
              Make voice automation useful, scalable, and easy to adopt.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-2xl font-bold">Approach</h3>
            <p className="mt-3 text-slate-300">
              Build systems around real sales workflows, not generic demos.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-2xl font-bold">Outcome</h3>
            <p className="mt-3 text-slate-300">
              Faster response, better qualification, smarter team focus.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}