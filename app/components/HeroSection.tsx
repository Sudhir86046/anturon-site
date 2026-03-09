"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Calls handled / day", value: "10,000+" },
  { label: "Avg. response time", value: "0.8 sec" },
  { label: "Live in", value: "< 7 days" },
];

export default function HeroSection() {
  const [showIntroGlow, setShowIntroGlow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowIntroGlow(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-black"
    >
      {showIntroGlow && (
        <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-slate-950/60">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-64 w-64 rounded-full bg-orange-500/60 blur-3xl"
          />
        </div>
      )}

      <motion.div
        aria-hidden="true"
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute -top-40 right-4 h-80 w-80 rounded-full bg-orange-500/25 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-180px] h-80 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent blur-3xl"
      />

       
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-4 md:px-10 pb-16 pt-20 md:flex-row md:items-center md:gap-12 md:pb-24 md:pt-24">
        
         
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
            <span>AI Voice Agents for Sales Teams</span>
          </div>

           
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Turn{" "}
            <span className="text-orange-400">every call</span> into a
            revenue opportunity.
          </h1>

           
          <p className="max-w-xl text-base text-slate-300 sm:text-lg">
            Anturon deploys AI voice agents that sound natural, follow your
            playbooks, and plug directly into your CRM — so your team talks only
            to the hottest leads.
          </p>

           
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#book-demo"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-orange-400"
            >
              Book a live demo
            </a>
            <a
              href="#playground"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-base font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
            Build Your Agentic AI 
            </a>
          </div>

           
          <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-3 sm:text-base">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-3"
              >
                <div className="text-[12px] uppercase tracking-wide text-slate-400">
                  {item.label}
                </div>
                <div className="mt-1 text-base font-semibold text-slate-50 sm:text-lg">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-[12px] text-slate-500 sm:text-sm">
            Plug &amp; play with your existing dialer, CRM and lead sources — no infra changes required.
          </p>
        </motion.div>

         
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative z-10 flex-1"
        >
          <div className="mx-auto max-w-sm rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-[0_0_60px_rgba(15,23,42,0.9)] backdrop-blur">
            
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/20 text-xs font-semibold text-orange-300">
                  AI
                </span>
                <div>
                  <p className="text-xs font-medium text-slate-100">
                    Outbound campaign: Hot leads
                  </p>
                  <p className="text-[11px] text-slate-400">
                    3 agents live · 127 calls in progress
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                Live
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <CallRow
                name="retails"
                number="+91 •••• 1823"
                status="Connected · 02:14"
                stage="Qualification"
              />
              <CallRow
                name="Retail lead "
                number="+91 •••• 9051"
                status="Ringing · auto-retry"
                stage="Follow-up"
              />
              <CallRow
                name="SME – Lead"
                number="+91 •••• 4410"
                status="Wrap-up · notes syncing"
                stage="Booked demo"
              />
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-2.5">
              <div className="text-[11px] text-slate-400">
                Answer rate today
                <div className="text-sm font-semibold text-slate-50">
                  80%
                </div>
              </div>
              <button className="rounded-full bg-slate-100/10 px-3 py-1.5 text-[11px] font-medium text-slate-100 hover:bg-slate-100/15">
                View call dashboard
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type CallRowProps = {
  name: string;
  number: string;
  status: string;
  stage: string;
};

function CallRow({ name, number, status, stage }: CallRowProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-2.5">
      <div>
        <p className="text-xs font-semibold text-slate-100">{name}</p>
        <p className="text-[11px] text-slate-500">{number}</p>
        <p className="mt-0.5 text-[11px] text-emerald-300">{status}</p>
      </div>
      <div className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] text-slate-200">
        {stage}
      </div>
    </div>
  );
}