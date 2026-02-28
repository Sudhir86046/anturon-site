"use client";

import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <HeroSection />

       
      <section
        id="packages"
        className="border-t border-slate-800 px-4 py-16"
      >
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">
            Choose how fast you want to scale
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Start with a small pod of AI agents or roll out across your entire
            outbound team.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
             
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="text-lg font-semibold">Starter</h3>
              <p className="mt-1 text-sm text-slate-300">
                For teams testing AI calls on a focused segment.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Up to 2 AI agents</li>
                <li>• Limited campaigns</li>
                <li>• Basic reporting</li>
              </ul>
              <button className="mt-6 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-900">
                Talk to us
              </button>
            </div>

             
            <div className="flex flex-col rounded-2xl border border-orange-500/60 bg-slate-900/60 p-5 shadow-[0_0_40px_rgba(248,150,30,0.2)]">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-300">
                Recommended
              </div>
              <h3 className="text-lg font-semibold">Growth</h3>
              <p className="mt-1 text-sm text-slate-300">
                For teams running serious outbound with multiple playbooks.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Up to 10 AI agents</li>
                <li>• Multiple campaigns &amp; queues</li>
                <li>• CRM sync &amp; routing</li>
              </ul>
              <button className="mt-6 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-orange-400">
                Book a pricing call
              </button>
            </div>

             
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="text-lg font-semibold">Enterprise</h3>
              <p className="mt-1 text-sm text-slate-300">
                For high-volume teams with custom workflows and compliance.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Unlimited AI agents</li>
                <li>• Advanced analytics</li>
                <li>• Custom integrations &amp; SLAs</li>
              </ul>
              <button className="mt-6 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-900">
                Talk to enterprise team
              </button>
            </div>
          </div>
        </motion.div>
      </section>

       
      <section
        id="features"
        className="border-t border-slate-800 px-4 py-16"
      >
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">
            Built for revenue &amp; operations teams
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Anturon fits into your existing stack and workflows instead of
            forcing you to change them.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Natural, human-like voice and pauses",
              "Lead prioritization and call sequencing",
              "Playbook-driven conversations",
              "Live handoff to human reps",
              "Auto-logging into your CRM",
              "Compliance and call recording controls",
            ].map((feature) => (
              <div
                key={feature}
                className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-orange-500/20 text-sm font-semibold text-orange-300">
                  ✓
                </div>
                <p className="text-sm text-slate-200">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

       
      <section
        id="roi"
        className="border-t border-slate-800 bg-slate-950 px-4 py-16"
      >
        <motion.div
          className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 px-5 py-8 md:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <h2 className="text-2xl font-semibold md:text-3xl">
                See the math – AI vs human calling
              </h2>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                In most outbound teams, AI agents unlock 3–5x more coverage at a
                fraction of the cost, while your reps focus only on high-intent
                conversations.
              </p>
            </div>

            <div className="grid flex-1 gap-4 md:grid-cols-2">
               
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  With AI voice agents
                </p>
                <dl className="mt-3 space-y-1.5 text-slate-100">
                  <div className="flex justify-between">
                    <dt className="text-slate-300">Cost per 1,000 calls</dt>
                    <dd className="font-semibold">₹ X</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-300">Live coverage</dt>
                    <dd className="font-semibold">3–5×</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-300">Go live time</dt>
                    <dd className="font-semibold">&lt; 7 days</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-300">Availability</dt>
                    <dd className="font-semibold">24×7</dd>
                  </div>
                </dl>
              </div>

               
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Only human calling team
                </p>
                <dl className="mt-3 space-y-1.5 text-slate-100">
                  <div className="flex justify-between">
                    <dt className="text-slate-300">Cost per 1,000 calls</dt>
                    <dd className="font-semibold">₹ Y</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-300">Live coverage</dt>
                    <dd className="font-semibold">1×</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-300">Go live time</dt>
                    <dd className="font-semibold">4–8 weeks</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-300">Availability</dt>
                    <dd className="font-semibold">Working hours</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Numbers are indicative. We&apos;ll plug in your actual salary,
            infra and call volume during the demo.
          </p>
        </motion.div>
      </section>

       
      <section
        id="playground"
        className="border-t border-slate-800 px-4 py-16"
      >
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">
            See how your call dashboard will look
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            This section will later show the real dashboard – live calls,
            answered rates, agent performance and lead stages. For now we keep
            it as <span className="font-semibold">&quot;Coming Soon&quot;</span>{" "}
            for demo.
          </p>
          <div className="mt-8 h-52 rounded-2xl border border-dashed border-slate-700 bg-slate-900/40" />
        </motion.div>
      </section>

       
      <section
        id="about"
        className="border-t border-slate-800 px-4 py-16"
      >
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">About Anturon</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Anturon is an AI voice workforce that runs your outbound and inbound
            calls at scale, while your team focuses only on high-intent
            conversations.
          </p>
        </motion.div>
      </section>

       
      <section
        id="book-demo"
        className="border-t border-slate-800 px-4 py-16"
      >
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Book a Demo</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Share your details and we&apos;ll set up a live Anturon playground
            for your team.
          </p>

          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-orange-400"
            />
            <input
              type="email"
              placeholder="Work email"
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-orange-400"
            />
            <input
              type="text"
              placeholder="Company name"
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-orange-400 md:col-span-2"
            />
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-slate-950 md:col-span-2 hover:bg-orange-400"
            >
              Request demo
            </button>
          </form>
        </motion.div>
      </section>

       
      <footer className="border-t border-slate-800 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 md:flex-row">
          <p>© 2026 Anturon Voice AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-orange-400">
              About
            </a>
            <a href="#packages" className="hover:text-orange-400">
              Pricing
            </a>
            <a href="#book-demo" className="hover:text-orange-400">
              Book demo
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
} 