import { PortfolioConfig } from "@/lib/types";

type HeroSectionProps = {
  person: PortfolioConfig["person"];
  socials: PortfolioConfig["socials"];
};

export function HeroSection({ person, socials }: HeroSectionProps) {
  return (
    <section id="home" className="section-shell space-y-6">
      <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
        {person.title}
      </p>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
        {person.fullName}
      </h1>
      <p className="max-w-2xl text-lg text-slate-300">{person.shortBio}</p>
      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href={`mailto:${person.email}`}
          className="rounded-md bg-cyan-400 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-300"
        >
          Contact Me
        </a>
        {person.resumeUrl ? (
          <a
            href={person.resumeUrl}
            className="rounded-md border border-slate-600 px-4 py-2 font-medium text-slate-100 hover:border-slate-400"
          >
            View Resume
          </a>
        ) : null}
      </div>
      <ul className="flex flex-wrap gap-4 pt-1 text-sm text-slate-300">
        {socials.map((social) => (
          <li key={social.href}>
            <a className="hover:text-cyan-300" href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
