"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Playground", href: "#playground" },
  { label: "Pricing", href: "#packages" },
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "https://api.anturon.io", external: true },
  { label: "About", href: "#about" },
  { label: "Demo", href: "#book-demo" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
         
        <div className="flex items-center gap-2">
          <span className="rounded bg-orange-500 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide">
            anturon
          </span>
          <span className="text-sm font-medium text-slate-200 sm:text-base">
            Voice AI
          </span>
        </div>

         
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-4 bg-slate-100" />
          <span className="mt-1 block h-0.5 w-4 bg-slate-100" />
          <span className="mt-1 block h-0.5 w-4 bg-slate-100" />
        </button>

         
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-200 transition hover:text-orange-400"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-slate-200 transition hover:text-orange-400"
              >
                {item.label}
              </Link>
            )
          )}

          <Link
            href="#book-demo"
            className="rounded-full bg-orange-500 px-4 py-1.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-orange-400"
          >
            Book Live Demo
          </Link>
        </div>
      </nav>

       
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="rounded px-2 py-2 text-sm text-slate-100 hover:bg-slate-800"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded px-2 py-2 text-sm text-slate-100 hover:bg-slate-800"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="#book-demo"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-orange-500 px-3 py-2 text-center text-sm font-semibold text-slate-950 hover:bg-orange-400"
            >
              Book Live Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 