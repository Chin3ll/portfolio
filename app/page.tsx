import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { portfolioData } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="space-y-10 pb-16">
      <nav className="sticky top-0 z-20 -mx-2 rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur">
        <ul className="flex flex-wrap gap-4 text-sm text-slate-300">
          <li><a className="hover:text-cyan-300" href="#home">Home</a></li>
          <li><a className="hover:text-cyan-300" href="#about">About</a></li>
          <li><a className="hover:text-cyan-300" href="#skills">Skills</a></li>
          <li><a className="hover:text-cyan-300" href="#experience">Experience</a></li>
          <li><a className="hover:text-cyan-300" href="#projects">Projects</a></li>
          <li><a className="hover:text-cyan-300" href="#education">Education</a></li>
          <li><a className="hover:text-cyan-300" href="#contact">Contact</a></li>
        </ul>
      </nav>
      <HeroSection person={portfolioData.person} socials={portfolioData.socials} />
      <AboutSection longBio={portfolioData.person.longBio} location={portfolioData.person.location} />
      <SkillsSection skills={portfolioData.skills} />
      <ExperienceSection experience={portfolioData.experience} />
      <ProjectsSection projects={portfolioData.projects} />
      <EducationSection education={portfolioData.education} />
      <ContactSection email={portfolioData.person.email} socials={portfolioData.socials} />
    </main>
  );
}
