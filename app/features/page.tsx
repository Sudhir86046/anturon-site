const features = [
  {
    title: "AI voice automation",
    desc: "Run outbound and inbound call workflows without depending entirely on manual calling teams.",
  },
  {
    title: "Lead qualification",
    desc: "Identify hot, warm, and cold leads through structured conversation flows.",
  },
  {
    title: "Campaign dashboard",
    desc: "Track call activity, lead outcomes, and campaign performance from one place.",
  },
  {
    title: "Smart routing",
    desc: "Send high-intent leads directly to your sales team for faster follow-up.",
  },
  {
    title: "Custom call flows",
    desc: "Adjust tone, scripts, questions, and qualification logic for each campaign.",
  },
  {
    title: "Actionable analytics",
    desc: "Use reporting and structured insights to improve team efficiency and conversion focus.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Features
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Built for high-volume sales conversations
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Anturon helps teams automate voice workflows while keeping lead
            qualification structured, trackable, and scalable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                Feature
              </p>
              <h2 className="mt-3 text-2xl font-bold">{feature.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
            Workflow
          </p>
          <h3 className="mt-3 text-3xl font-bold">
            From lead entry to qualified handoff
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {["Lead source", "AI conversation", "Qualification", "Sales handoff"].map(
              (step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center"
                >
                  {step}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}