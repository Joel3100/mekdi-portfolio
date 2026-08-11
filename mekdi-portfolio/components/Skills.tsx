import { skillGroups, tools } from "@/data/site";

export default function Skills() {
  return (
    <section className="border-y border-paper/10 bg-paper/[0.03] px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-signal">
          Skills &amp; Tools
        </p>

        <div className="grid gap-10 md:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-4 font-display text-lg tracking-wide">{group.label}</p>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-paper/60">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-3 border-t border-paper/10 pt-10">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-paper/15 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-paper/70"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
