"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";

const stats = [
  { value: site.experience, label: "Experience" },
  { value: site.projectsCount, label: "Projects" },
  { value: site.clientsCount, label: "Clients" },
  { value: "4", label: "Disciplines" },
];

export default function About() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-signal">About</p>

      <p className="max-w-2xl font-display text-3xl leading-tight tracking-wide md:text-4xl">
        I work across graphic design, infographics, motion graphics, and
        video editing — helping brands and organizations communicate ideas
        through visuals people actually stop for.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-[280px_1fr] md:items-center">
        <button
          onClick={() => setPlaying(true)}
          className="group relative aspect-video w-full max-w-[280px] overflow-hidden rounded-xl border border-paper/10 bg-ink"
          aria-label="Play intro video"
        >
          {playing ? (
            <video
              src={site.introVideo}
              controls
              autoPlay
              playsInline
              className="h-full w-full object-contain"
            />
          ) : (
            <>
              <Image
                src="/profile/intro-poster.jpg"
                alt="Intro video preview"
                fill
                sizes="280px"
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/40 transition-colors group-hover:bg-ink/20">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-signal font-mono text-ink">
                  ▶
                </span>
              </div>
              <p className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-paper/80">
                Watch Intro
              </p>
            </>
          )}
        </button>

        {/* Stats — right of the video, same row */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-paper/15 pl-4">
              <p className="font-display text-3xl">{s.value}</p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-paper/50">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
