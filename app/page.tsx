"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";

type TabKey = "how" | "customise" | "roi" | "resources";

function HowItWorksContent() {
  return (
    <div className="space-y-3">
      <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200">
        User journey
      </span>
      <h3 className="text-xl font-semibold md:text-2xl">
        From first visit to booked demo – in a few simple steps.
      </h3>
      <p className="text-sm text-slate-300">
        Show founders exactly how a visitor lands on the site, explores the
        playground, talks to the AI agent and finally books a demo.
      </p>
      <ul className="mt-1 space-y-2 text-sm text-slate-200">
        <li>• Visitor lands on your hero section and understands the promise in 3–5 seconds.</li>
        <li>• They scroll into the playground and click through different scenarios.</li>
        <li>• They see sample dashboards, call logs and agent behaviour.</li>
        <li>• Once trust builds, they click “Book demo” or “Talk to us”.</li>
      </ul>
    </div>
  );
}

function CustomiseAgentContent() {
  return (
    <div className="space-y-3">
      <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200">
        Agent settings
      </span>
      <h3 className="text-xl font-semibold md:text-2xl">
        Customise the AI agent for your use-case.
      </h3>
      <p className="text-sm text-slate-300">
        Walk founders through how quickly they can tune the AI agent to match
        their brand voice and workflows.
      </p>
      <ul className="mt-1 space-y-2 text-sm text-slate-200">
        <li>• Choose language, tone and greeting lines that match their brand.</li>
        <li>• Configure call flows, FAQs and escalation rules without engineering.</li>
        <li>• Map CRM fields so every call updates leads and tickets automatically.</li>
      </ul>
    </div>
  );
}

function RoiViewContent() {
  return (
    <div className="space-y-3">
      <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200">
        ROI view
      </span>
      <h3 className="text-xl font-semibold md:text-2xl">
        Make the business case in one glance.
      </h3>
      <p className="text-sm text-slate-300">
        Use this tab to show hard numbers: how many calls Anturon can handle
        and what savings it unlocks compared to traditional call centers.
      </p>
      <ul className="mt-1 space-y-2 text-sm text-slate-200">
        <li>• Calls handled per day and peak capacity.</li>
        <li>• Answer rate, drop-off rate and first-call resolution benchmarks.</li>
        <li>• Cost per call vs. legacy setup and payback period for Anturon.</li>
      </ul>
    </div>
  );
}

function ResourcesContent() {
  return (
    <div className="space-y-3">
      <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200">
        Resources
      </span>
      <h3 className="text-xl font-semibold md:text-2xl">
        Keep all decision-maker resources in one place.
      </h3>
      <p className="text-sm text-slate-300">
        Give buyers everything they need to move forward – without leaving the
        page.
      </p>
      <ul className="mt-1 space-y-2 text-sm text-slate-200">
        <li>• Implementation checklist and onboarding timeline.</li>
        <li>• Security, compliance and data-privacy summary.</li>
        <li>• Integration docs, FAQ and sample call recordings.</li>
      </ul>
    </div>
  );
}
export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("how");
 
  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<TabKey>;
      if (!custom.detail) return;

      setActiveTab(custom.detail);

      const el = document.getElementById("playground");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("playground-tab", handler as EventListener);
    return () =>
      window.removeEventListener("playground-tab", handler as EventListener);
  }, []);

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
        className="border-t border-slate-800 bg-slate-950 px-4 py-16">
        <div className="mx-auto max-w-6xl space-y-6">
          <header className="space-y-2">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Explore how the call experience looks
            </h2>
            <p className="max-w-2xl text-sm text-slate-300 md:text-base">
              Use this interactive area to walk founders through user journey,
              agent configuration, ROI and decision-maker resources.
            </p>
          </header>
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 md:p-10">
              {activeTab === "how" && <HowItWorksContent />}
              {activeTab === "customise" && <CustomiseAgentContent />}
              {activeTab === "roi" && <RoiViewContent />}
              {activeTab === "resources" && <ResourcesContent />}
            </div>

            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Preview area
              </p>

              {activeTab === "how" && (
                <>
                  <h3 className="mt-3 text-sm font-semibold text-slate-100">
                    User journey preview
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Later you can plug in a mini call-flow or screen capture
                    that shows how a visitor lands on the site, explores the
                    playground and books a live demo.
                  </p>
                </>
              )}

              {activeTab === "customise" && (
                <>
                  <h3 className="mt-3 text-sm font-semibold text-slate-100">
                    Agent settings preview
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    This space can show a small UI with agent name, tone,
                    language, script and routing rules – so buyers see how fast
                    they can tweak the AI.
                  </p>
                </>
              )}

              {activeTab === "roi" && (
                <>
                  <h3 className="mt-3 text-sm font-semibold text-slate-100">
                    ROI dashboard preview
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Replace this with charts or metric cards: cost per 1,000
                    calls, coverage, answer rate and savings vs human-only
                    setup.
                  </p>
                </>
              )}

              {activeTab === "resources" && (
                <>
                  <h3 className="mt-3 text-sm font-semibold text-slate-100">
                    Resource library preview
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Use this panel for case studies, technical one-pagers and
                    sample recordings – everything a decision-maker needs
                    without leaving the demo.
                  </p>
                </>
              )}
              <div className="mt-6 h-28 rounded-xl border border-slate-700 bg-slate-950/70" />
            </div>
          </div>
        </div>
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