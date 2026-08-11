import { site } from "@/data/site";
import { FaBehance, FaInstagram, FaTelegramPlane, FaEnvelope, FaLinkedin } from "react-icons/fa";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  email: FaEnvelope,
  behance: FaBehance,
  instagram: FaInstagram,
  telegram: FaTelegramPlane,
  linkedin: FaLinkedin,
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-signal">Contact</p>
          <h2 className="font-display text-4xl leading-tight tracking-wide md:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 max-w-sm text-paper/60">
            Let&apos;s make something people remember. Send a few details and
            I&apos;ll reply within a day or two.
          </p>

          <div className="mt-9 flex gap-4">
            {site.socials.map((s) => {
              const Icon = icons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-signal hover:text-signal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/*
          Replace YOUR_FORM_ID with a real Formspree endpoint (formspree.io) —
          zero backend needed, submissions land straight in email.
        */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              name="name"
              placeholder="Name"
              className="rounded-lg border border-paper/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-signal"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-lg border border-paper/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-signal"
            />
          </div>
          <select
            name="service"
            defaultValue=""
            className="w-full rounded-lg border border-paper/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-signal"
          >
            <option value="" disabled>
              Service needed
            </option>
            <option>Graphic Design</option>
            <option>Infographic Design</option>
            <option>Motion Graphics</option>
            <option>Video Editing</option>
            <option>Not sure yet</option>
          </select>
          <textarea
            required
            name="message"
            rows={4}
            placeholder="Tell me about your project"
            className="w-full resize-none rounded-lg border border-paper/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-signal"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-signal px-7 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:scale-[1.02]"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
