"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/site";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const media = project.gallery[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % project.gallery.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + project.gallery.length) % project.gallery.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, project.gallery.length]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative grid max-h-[88vh] w-full max-w-4xl gap-0 overflow-y-auto rounded-2xl border border-paper/10 bg-ink md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close project"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 font-mono text-paper hover:bg-signal hover:text-ink"
        >
          ✕
        </button>

        {/* Media viewer */}
        <div className="relative aspect-square w-full bg-ink/40 md:aspect-auto">
          {media.type === "video" ? (
            <video
              key={media.src}
              src={media.src}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-contain"
            />
          ) : (
            <Image
              key={media.src}
              src={media.src}
              alt={`${project.title} — image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          )}

          {project.gallery.length > 1 && (
            <>
              <button
                onClick={() =>
                  setIndex((i) => (i - 1 + project.gallery.length) % project.gallery.length)
                }
                aria-label="Previous"
                className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 hover:bg-signal hover:text-ink"
              >
                ‹
              </button>
              <button
                onClick={() => setIndex((i) => (i + 1) % project.gallery.length)}
                aria-label="Next"
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 hover:bg-signal hover:text-ink"
              >
                ›
              </button>
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                {project.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to media ${i + 1}`}
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === index ? "bg-signal" : "bg-paper/30"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-7">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-signal">
              {project.category} · {project.aspect} · {project.year}
            </p>
            {project.isRealClient && (
              <span className="rounded-full bg-signal/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-signal">
                Client Work
              </span>
            )}
          </div>
          <h3 className="mt-2 font-display text-3xl tracking-wide">{project.title}</h3>
          <p className="mt-1 text-sm text-paper/50">{project.client}</p>

          <p className="mt-5 text-sm leading-relaxed text-paper/75">{project.summary}</p>

          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-paper/10 pt-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40">Role</p>
              <p className="mt-1 text-sm">{project.role}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40">Tools</p>
              <p className="mt-1 text-sm">{project.tools.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
