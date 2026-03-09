"use client";

import Image from "next/image";

const resources = [
  {
    title: "AI Voice Campaign Case Study",
    desc: "See how outbound voice agents handled thousands of leads in a real campaign.",
    image: "/preview1.jpg",
  },
  {
    title: "Campaign Call Recording",
    desc: "Listen to how the AI agent interacts with leads and qualifies prospects.",
    image: "/preview2.jpg",
  },
  {
    title: "Agent Setup Guide",
    desc: "Step-by-step guide to configure your voice agent and campaign workflow.",
    image: "/preview3.jpg",
  },
  {
    title: "Lead Qualification Flow",
    desc: "Understand how AI agents identify hot, warm, and cold leads automatically.",
    image: "/preview4.jpg",
  },
  {
    title: "Knowledge Base Training",
    desc: "Upload FAQs, scripts, and documents to make your agent smarter.",
    image: "/preview1.jpg",
  },
  {
    title: "Campaign Optimization Tips",
    desc: "Best practices to improve conversion rates using voice automation.",
    image: "/preview2.jpg",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
           Resources
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Resources to understand AI voice automation
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            Explore guides, recordings, and case studies to understand how
            Anturon voice agents run real outbound campaigns and qualify leads.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-orange-400"
            >
              <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
              </div>

              <h3 className="text-lg font-semibold">{item.title}</h3>

              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>

              <button className="mt-4 text-sm font-semibold text-orange-400">
                View Resource →
              </button>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                Featured Resource
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                See how AI voice agents handle real campaigns
              </h2>

              <p className="mt-4 text-slate-300">
                This demo explains the full lifecycle of a voice campaign,
                including lead upload, AI calling, qualification, and
                performance insights.
              </p>

              <button className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black hover:bg-orange-400">
                Watch Demo
              </button>
            </div>

            <div className="relative h-64 w-full overflow-hidden rounded-2xl">
              <Image
                src="/preview3.jpg"
                alt="Resource preview"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}