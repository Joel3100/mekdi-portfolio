import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-signal">
            {site.role} — {site.location}
          </p>
          <h1 className="font-display text-[15vw] leading-[0.85] tracking-tight md:text-[6.2vw]">
            DESIGN.
            <br />
            MOTION.
            <br />
            STORY<span className="text-signal">TELLING.</span>
          </h1>
          <p className="mt-8 max-w-md text-paper/70">
            I&apos;m {site.name}, a visual designer turning ideas into graphic,
            infographic, motion, and video work that brands actually use.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-signal px-7 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:scale-[1.03]"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-paper/25 px-7 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-paper"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

        {/* Profile portrait */}
        <div className="mx-auto flex flex-col items-center gap-4">
          <div className="relative aspect-square w-64 overflow-hidden rounded-full border border-paper/15 bg-paper/5 md:w-72">
            <Image
              src={site.profilePhoto}
              alt={site.name}
              fill
              priority
              sizes="(max-width: 768px) 256px, 288px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
