import { SocialLink } from "@/lib/types";

type ContactSectionProps = {
  email: string;
  socials: SocialLink[];
};

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
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
