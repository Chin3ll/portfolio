type AboutSectionProps = {
  longBio: string;
  location: string;
};

export function AboutSection({ longBio, location }: AboutSectionProps) {
  return (
    <section id="about" className="section-shell space-y-3">
      <h2 className="section-title">About</h2>
      <p className="muted-text leading-relaxed">{longBio}</p>
      <p className="text-sm text-slate-400">Based in {location}</p>
    </section>
  );
}
