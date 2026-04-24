type AboutSectionProps = {
  longBio: string;
  location: string;
};

export function AboutSection({ longBio, location }: AboutSectionProps) {
  return (
    <section id="about" className="space-y-3">
      <h2 className="text-2xl font-semibold text-white">About</h2>
      <p className="text-slate-300">{longBio}</p>
      <p className="text-sm text-slate-400">Based in {location}</p>
    </section>
  );
}
