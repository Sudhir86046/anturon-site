"use client";

import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const rows = [
  {
    metric: "Cost per 1,000 Calls",
    ai: "Fraction of human cost",
    human: "5 - 8× higher operational cost",
  },
  {
    metric: "Live Call Coverage",
    ai: "3 - 5× more volume",
    human: "1× baseline",
  },
  {
    metric: "Go-Live Time",
    ai: "Under 10 days",
    human: "4 - 8 weeks (hiring + training)",
  },
  {
    metric: "Availability",
    ai: "24 × 7 × 365",
    human: "Business hours only",
  },
  {
    metric: "Consistency",
    ai: "100% playbook-adherent",
    human: "Varies by rep",
  },
  {
    metric: "Scale on Demand",
    ai: "Instant",
    human: "Weeks of hiring & onboarding",
  },
];

export default function ROIPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">

      <section className="border-b border-slate-800 px-4 py-20">
        <motion.div
          className="mx-auto max-w-6xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <h1 className="text-3xl font-semibold md:text-5xl">
            The ROI Is Clear -{" "}
            <span className="text-orange-400">
              AI Voice Agents vs Traditional Calling Teams
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-300 md:text-lg">
            Enterprises using Anturon AI voice agents consistently achieve
            3–5× greater call coverage at a fraction of the cost of a human
            calling team - with 24×7 availability, instant scale, and zero
            ramp-up time.
          </p>

        </motion.div>
      </section>

      <section className="px-4 py-16">
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">

            <div className="grid grid-cols-3 border-b border-slate-800 bg-slate-900/60">
              <div className="p-4 text-sm font-semibold text-slate-300">
                Metric
              </div>
              <div className="border-l border-slate-800 p-4 text-sm font-semibold text-orange-300">
                With Anturon AI Agents
              </div>
              <div className="border-l border-slate-800 p-4 text-sm font-semibold text-slate-300">
                Human Calling Team
              </div>
            </div>

            {rows.map((row) => (
              <div
                key={row.metric}
                className="grid grid-cols-3 border-b border-slate-800 last:border-b-0"
              >
                <div className="p-4 text-sm text-slate-200">
                  {row.metric}
                </div>

                <div className="border-l border-slate-800 p-4 text-sm text-slate-100">
                  {row.ai}
                </div>

                <div className="border-l border-slate-800 p-4 text-sm text-slate-400">
                  {row.human}
                </div>
              </div>
            ))}

          </div>

          <p className="mt-4 text-xs text-slate-500 sm:text-sm">
              All figures are directional benchmarks. During your live demo, we&apos;ll model the exact ROI based on your team size, call volume, and current infra costs.
          </p>
           

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

            <a
              href="#book-demo"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-slate-950 hover:bg-orange-400 transition"
            >
              Book a Live Demo
            </a>

            <a
              href="#packages"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-900 transition"
            >
              View Pricing
            </a>

          </div>

        </motion.div>
      </section>
       <Footer/>
    </main>
  );
}