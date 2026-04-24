import { ExperienceItem } from "@/lib/types";

type ExperienceSectionProps = {
  experience: ExperienceItem[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Experience</h2>
      <div className="space-y-4">
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="rounded-lg border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm text-slate-400">
              {item.startDate} - {item.endDate} | {item.location}
            </p>
            <h3 className="mt-1 text-lg font-medium text-white">
              {item.role} at {item.company}
            </h3>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-300">
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
