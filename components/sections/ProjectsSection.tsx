import Link from "next/link";

import { ProjectItem } from "@/lib/types";

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Projects</h2>
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="rounded-lg border border-slate-800 bg-slate-900 p-4">
            <h3 className="text-lg font-medium text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
            <p className="mt-2 text-sm text-cyan-300">{project.impact}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">
              {project.techStack.join(" - ")}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <Link className="text-cyan-300 hover:text-cyan-200" href={`/projects/${project.slug}`}>
                Details
              </Link>
              {project.liveUrl ? (
                <a className="text-cyan-300 hover:text-cyan-200" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live
                </a>
              ) : null}
              {project.repoUrl ? (
                <a className="text-cyan-300 hover:text-cyan-200" href={project.repoUrl} target="_blank" rel="noreferrer">
                  Code
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
