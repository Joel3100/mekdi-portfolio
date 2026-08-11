import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 px-6 py-8">
      <div className="mx-auto max-w-6xl text-center font-mono text-xs uppercase tracking-widest text-paper/40">
        <p>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}