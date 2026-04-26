import { EducationItem } from "@/lib/types";

type EducationSectionProps = {
  education: EducationItem[];
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="section-shell space-y-5">
      <h2 className="section-title">Education</h2>
      <div className="space-y-3">
        {education.map((item) => (
          <article key={`${item.institution}-${item.degree}`} className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
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
