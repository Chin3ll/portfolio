import { SocialLink } from "@/lib/types";

type ContactSectionProps = {
  email: string;
  socials: SocialLink[];
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

export function ContactSection({ email, socials }: ContactSectionProps) {
  return (
    <section id="contact" className="section-shell space-y-5">
      <h2 className="section-title">Contact</h2>
      <p className="text-slate-300">
        Open to full-time roles, contract work, and collaborations.
      </p>
      <a className="inline-block text-lg text-cyan-300 hover:text-cyan-200" href={`mailto:${email}`}>
        {email}
      </a>
      <ul className="flex flex-wrap gap-4 border-t border-white/10 pt-3 text-sm">
        {socials.map((social) => (
          <li key={social.href}>
            <a className="text-slate-300 hover:text-cyan-300" href={social.href} target="_blank" rel="noreferrer">
              <SocialLabel label={social.label} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
