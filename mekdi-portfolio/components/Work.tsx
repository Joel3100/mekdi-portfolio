"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/site";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Work() {
  const [openId, setOpenId] = useState<number | null>(null);

  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const openProject = projects.find((p) => p.id === openId) ?? null;

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <p className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-signal">
        Selected Work
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.id} project={p} onClick={() => setOpenId(p.id)} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/work"
          className="rounded-full border border-paper/25 px-7 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-signal hover:text-signal"
        >
          View More →
        </Link>
      </div>

      {openProject && <ProjectModal project={openProject} onClose={() => setOpenId(null)} />}
    </section>
  );
}
