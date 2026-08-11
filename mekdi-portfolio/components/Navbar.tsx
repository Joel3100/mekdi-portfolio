"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - start) / 1000)), 1000);
    return () => clearInterval(id);
  }, []);

  const timecode = () => {
    const h = String(Math.floor(elapsed / 3600)).padStart(2, "0");
    const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
    const s = String(elapsed % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-paper/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg tracking-wide">
          {site.name.split(" ")[0].toUpperCase()}<span className="text-signal">.</span>
        </a>

        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-paper/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-paper">
              {l.label}
            </a>
          ))}
        </nav>

        <div
          className="flex items-center gap-2 font-mono text-xs text-paper/50"
          title="Time spent on this page — decorative, nothing is being recorded"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
          <span className="hidden sm:inline">ON PAGE</span>
          <span>{timecode()}</span>
        </div>
      </div>
    </header>
  );
}
