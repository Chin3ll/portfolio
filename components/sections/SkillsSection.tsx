import { SkillCategory } from "@/lib/types";

type SkillsSectionProps = {
  skills: SkillCategory[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="section-shell space-y-5">
      <h2 className="section-title">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <article key={group.title} className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
            <h3 className="font-medium text-cyan-300">{group.title}</h3>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
