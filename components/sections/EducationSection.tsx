import { EducationItem } from "@/lib/types";

type EducationSectionProps = {
  education: EducationItem[];
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Education</h2>
      <div className="space-y-3">
        {education.map((item) => (
          <article key={`${item.institution}-${item.degree}`} className="rounded-lg border border-slate-800 bg-slate-900 p-4">
            <h3 className="font-medium text-white">{item.degree}</h3>
            <p className="text-sm text-slate-300">{item.institution}</p>
            <p className="text-sm text-slate-400">
              {item.startDate} - {item.endDate}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
