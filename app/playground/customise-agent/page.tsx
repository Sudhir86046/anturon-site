"use client";

import Image from "next/image";
import { useState } from "react";

const previewImages = [
  "/preview1.jpg",
  "/preview2.jpg",
  "/preview3.jpg",
  "/preview4.jpg",
];

export default function CustomiseAgentPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Playground / Customise your agent
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Customise your agent for your brand, audience, and workflow
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
            From conversation tone to qualification logic and post-call actions,
            every layer of the Anturon AI agent can be configured to match your
            sales process.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-200">
            <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2">
              Voice tone
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2">
              Call logic
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2">
              Lead routing
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2">
              Knowledge inputs
            </span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Voice & Behaviour
              </p>

              <h2 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                Design how your agent speaks, responds, and qualifies
              </h2>

              <p className="text-base leading-7 text-slate-300">
                Anturon allows you to tailor the AI voice agent to match your
                brand identity and campaign goals. You can define how the agent
                greets users, what tone it should use, which language it should
                prefer, and how it should guide the conversation.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-300">
                Whether your campaign needs a professional sales assistant, a
                friendly follow-up caller, or a direct qualification flow, the
                agent can be adjusted to create a consistent experience for
                every lead.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
                  Tone and speaking style
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
                  Hindi, English, or bilingual flow
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
                  Brand-specific opening lines
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
                  Audience-based conversation approach
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Flow & Outcomes
              </p>

              <h2 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                Control the call flow from first question to final action
              </h2>

              <p className="text-base leading-7 text-slate-300">
                You can define the logic behind every interaction. Set
                qualification questions, objection-handling steps, lead
                temperature rules, and next actions based on the outcome of the
                conversation.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-300">
                Once the call ends, Anturon can automatically classify leads,
                trigger follow-ups, support demo booking, and prepare structured
                insights for your sales team so they can focus on the most
                valuable opportunities.
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  Custom qualification logic
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  Lead tagging and routing
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  Demo booking workflows
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  Knowledge-backed responses
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg">
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Configuration Preview
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                See how customization works in practice
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Preview the configuration layers that shape agent behaviour,
                lead qualification, and workflow outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {previewImages.map((src, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(src)}
                  className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-left transition duration-300 hover:scale-[1.02] hover:border-orange-400">
                  <div className="relative h-52 w-full">
                    <Image
                      src={src}
                      alt={`Customisation preview ${index + 1}`}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div
            className="relative h-[80vh] w-full max-w-6xl cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src={selectedImage}
              alt="Full preview"
              fill
              className="rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}