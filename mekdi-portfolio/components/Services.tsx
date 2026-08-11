import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <p className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-signal">Services</p>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="bg-ink p-8 transition-colors hover:bg-paper/[0.04]">
            <span className="font-display text-3xl text-signal">{s.icon}</span>
            <h3 className="mt-4 font-display text-2xl tracking-wide">{s.title}</h3>
            <p className="mt-2 text-sm text-paper/60">{s.description}</p>
            <ul className="mt-5 space-y-1.5 font-mono text-xs uppercase tracking-wide text-paper/45">
              {s.items.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
