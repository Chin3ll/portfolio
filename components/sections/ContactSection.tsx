import { SocialLink } from "@/lib/types";

type ContactSectionProps = {
  email: string;
  socials: SocialLink[];
};

function SocialLabel({ label }: { label: string }) {
  if (label === "GitHub") {
    return (
      <span aria-label="GitHub" className="inline-flex items-center">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current"
        >
          <path d="M12 .5C5.65.5.5 5.67.5 12.04c0 5.1 3.29 9.43 7.86 10.95.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.2 1.76 1.2 1.03 1.77 2.69 1.26 3.34.97.1-.75.4-1.27.73-1.56-2.56-.3-5.26-1.29-5.26-5.75 0-1.27.45-2.3 1.19-3.11-.12-.3-.52-1.5.11-3.13 0 0 .98-.32 3.2 1.19.93-.26 1.92-.39 2.9-.39s1.97.13 2.9.39c2.22-1.51 3.2-1.19 3.2-1.19.63 1.63.23 2.83.11 3.13.74.81 1.19 1.84 1.19 3.11 0 4.47-2.71 5.44-5.29 5.74.42.36.79 1.06.79 2.15v3.18c0 .31.21.67.8.56 4.56-1.52 7.84-5.85 7.84-10.95C23.5 5.67 18.35.5 12 .5Z" />
        </svg>
      </span>
    );
  }

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
