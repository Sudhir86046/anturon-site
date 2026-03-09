import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹--/mo",
    desc: "For early teams testing AI voice workflows.",
    features: [
      "1 AI voice campaign",
      "Basic lead qualification",
      "Dashboard access",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "₹--/mo",
    desc: "For teams scaling outbound calling operations.",
    features: [
      "Multiple campaigns",
      "Custom call flows",
      "Lead tagging and routing",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large teams with advanced workflow needs.",
    features: [
      "Custom integrations",
      "Advanced analytics",
      "Dedicated onboarding",
      "Enterprise support",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Pricing
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Simple pricing for growing sales teams
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Choose a plan that fits your campaign size, team workflow, and
            outbound calling needs.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-6 ${
                plan.highlighted
                  ? "border-orange-400 bg-slate-900 shadow-lg shadow-orange-500/10"
                  : "border-slate-800 bg-slate-900/70"
              }`}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                {plan.name}
              </p>
              <h2 className="mt-4 text-3xl font-bold">{plan.price}</h2>
              <p className="mt-3 text-slate-300">{plan.desc}</p>

              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-300"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <Link
                href="/demo"
                className={`mt-6 inline-block rounded-xl px-5 py-3 font-semibold ${
                  plan.highlighted
                    ? "bg-orange-500 text-black hover:bg-orange-400"
                    : "border border-slate-700 bg-slate-950 text-white hover:border-orange-400"
                }`}
              >
                Choose plan
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-center">
          <h3 className="text-2xl font-bold">Need custom pricing?</h3>
          <p className="mt-3 text-slate-300">
            We can create a plan based on your campaign volume, workflow, and
            integration needs.
          </p>
          <Link
            href="/demo"
            className="mt-5 inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black hover:bg-orange-400"
          >
            Talk to sales
          </Link>
        </div>
      </section>
    </main>
  );
}