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
    <main className="space-y-12">
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
