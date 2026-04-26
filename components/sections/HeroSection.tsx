import { PortfolioConfig } from "@/lib/types";

type HeroSectionProps = {
  person: PortfolioConfig["person"];
  socials: PortfolioConfig["socials"];
};

function SocialLabel({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <span aria-label="LinkedIn" className="inline-flex items-center">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current"
        >
          <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.84v1.64h.05c.54-1.02 1.87-2.1 3.85-2.1 4.11 0 4.87 2.7 4.87 6.2V21h-4v-5.48c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.88V21h-3.99V9Z" />
        </svg>
      </span>
    );
  }

  return <>{label}</>;
}

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
              <SocialLabel label={social.label} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
