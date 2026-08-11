import Image from "next/image";
import type { Project } from "@/data/site";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-[4/5] overflow-hidden rounded-xl text-left"
    >
      <Image
        src={project.cover}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 90vw, 400px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/20 transition-colors group-hover:from-ink/90" />

      <div className="absolute left-3 top-3 flex gap-2">
        <span className="rounded-full bg-ink/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur-sm">
          {project.aspect}
        </span>
        {project.isRealClient && (
          <span className="rounded-full bg-signal px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink">
            Client Work
          </span>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-paper/70">
          {project.category} · {project.year}
        </p>
        <p className="mt-1 font-display text-xl tracking-wide">{project.title}</p>
      </div>
    </button>
  );
}
