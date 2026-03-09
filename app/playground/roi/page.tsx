"use client";

const roiStats = [
  {
    label: "Calls handled / day",
    value: "10,000+",
    desc: "Scale outbound campaigns without increasing headcount.",
  },
  {
    label: "Agent availability",
    value: "24/7",
    desc: "Run qualification and follow-up beyond working hours.",
  },
  {
    label: "Lead response speed",
    value: "Instant",
    desc: "Reach leads faster while intent is still high.",
  },
  {
    label: "Manual effort reduced",
    value: "70%",
    desc: "Free up sales teams from repetitive calling workflows.",
  },
];

const comparisonRows = [
  {
    metric: "Call volume",
    human: "Limited by team size",
    ai: "Scales instantly across campaigns",
  },
  {
    metric: "Availability",
    human: "Working hours only",
    ai: "24/7 campaign coverage",
  },
  {
    metric: "Lead qualification",
    human: "Manual and inconsistent",
    ai: "Structured and repeatable",
  },
  {
    metric: "Follow-up speed",
    human: "Often delayed",
    ai: "Immediate and automated",
  },
  {
    metric: "Reporting",
    human: "Manual tracking",
    ai: "Real-time dashboard visibility",
  },
];

const impactCards = [
  {
    title: "Reduce repetitive work",
    desc: "Let AI handle first-touch conversations, qualification questions, and basic routing so your sales team spends more time closing.",
  },
  {
    title: "Increase campaign efficiency",
    desc: "Run more calls, test more scripts, and process more leads without expanding the calling team every time volume increases.",
  },
  {
    title: "Improve sales focus",
    desc: "Push high-intent conversations to your team while filtering low-priority leads into structured follow-up workflows.",
  },
];

export default function ROIPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Playground / ROI
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
                Measure the business impact of AI voice automation
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                Anturon helps teams lower manual calling effort, respond faster
                to leads, and scale campaign performance without increasing
                operational complexity. The result is a more efficient sales
                workflow with better use of human time.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2">
                  Lower operational load
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2">
                  Faster lead response
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2">
                  Better conversion focus
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                ROI Snapshot
              </p>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm text-slate-400">Efficiency gain</p>
                  <p className="mt-2 text-3xl font-bold">Higher throughput</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm text-slate-400">Team benefit</p>
                  <p className="mt-2 text-3xl font-bold">Less repetitive work</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm text-slate-400">Business outcome</p>
                  <p className="mt-2 text-3xl font-bold">Faster lead handling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {roiStats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-sm text-slate-400">{item.label}</p>
              <h2 className="mt-3 text-3xl font-bold">{item.value}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[32px] border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <div className="mb-6 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Comparison View
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Compare traditional calling with AI-powered workflows
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-300">
              This view helps buyers quickly understand where automation creates
              measurable efficiency across campaign operations.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-800">
            <div className="grid grid-cols-3 bg-slate-950/80 px-4 py-4 text-sm font-semibold text-slate-200">
              <div>Metric</div>
              <div>Traditional Team</div>
              <div>Anturon AI Agent</div>
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={row.metric}
                className={`grid grid-cols-3 px-4 py-4 text-sm ${
                  index !== comparisonRows.length - 1
                    ? "border-t border-slate-800"
                    : ""
                }`}
              >
                <div className="font-medium text-white">{row.metric}</div>
                <div className="pr-3 text-slate-400">{row.human}</div>
                <div className="text-slate-300">{row.ai}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {impactCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[28px] border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Impact
              </p>
              <h3 className="mt-3 text-2xl font-bold">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[32px] border border-slate-800 bg-slate-900/70 p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                ROI Summary
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Better use of sales time creates better business outcomes
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                Anturon is not just about making more calls. It is about helping
                your team spend less time on repetitive outreach and more time
                on qualified conversations. That shift improves operational
                efficiency, campaign speed, and decision-making quality across
                the funnel.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-500/30 bg-orange-500/10 px-6 py-5">
              <p className="text-sm text-orange-300">Outcome</p>
              <p className="mt-2 text-2xl font-bold text-white">
                Scale smarter, not heavier
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}