"use client";

import { useState } from "react";
import { projects, categories, type Category } from "@/data/site";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function WorkGrid() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const openProject = projects.find((p) => p.id === openId) ?? null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-signal">
        All Work
      </p>
      <h1 className="mb-10 font-display text-4xl tracking-wide md:text-5xl">
        Every project, in one place.
      </h1>

      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${
              active === c
                ? "border-signal bg-signal text-ink"
                : "border-paper/20 text-paper/60 hover:border-paper/50 hover:text-paper"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} onClick={() => setOpenId(p.id)} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-mono text-sm text-paper/40">
          No projects in this category yet.
        </p>
      )}

      {openProject && <ProjectModal project={openProject} onClose={() => setOpenId(null)} />}
    </section>
  );
}
