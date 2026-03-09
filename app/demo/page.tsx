export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Demo
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Book a live demo of Anturon
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            See how AI voice agents handle campaigns, qualify leads, and push
            structured results to your team.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
              What you will see
            </p>
            <div className="mt-5 space-y-3">
              {[
                "AI calling workflow walkthrough",
                "Lead qualification logic",
                "Dashboard and reporting view",
                "Campaign customization options",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
              Request a demo
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Let’s show you the workflow live
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Share your campaign use case, team size, or sales workflow and we
              will tailor the demo around it.
            </p>

            <div className="mt-6 space-y-3">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
              />
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
              />
              <input
                type="text"
                placeholder="Company name"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
              />
              <textarea
                placeholder="Tell us about your use case"
                className="h-32 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
              />
              <button className="w-full rounded-xl bg-orange-500 px-5 py-3 font-semibold text-black hover:bg-orange-400">
                Request demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}