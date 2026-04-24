import { notFound } from "next/navigation";
import Link from "next/link";

import { portfolioData } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioData.projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="space-y-6">
      <Link className="text-sm text-cyan-300 hover:text-cyan-200" href="/">
        Back to home
      </Link>
      <header>
        <h1 className="text-3xl font-bold text-white">{project.title}</h1>
        <p className="mt-3 text-slate-300">{project.summary}</p>
      </header>
      <section className="space-y-3 rounded-lg border border-slate-800 bg-slate-900 p-5">
        <p className="text-cyan-300">{project.impact}</p>
        <p className="text-sm text-slate-300">Stack: {project.techStack.join(", ")}</p>
        <div className="flex gap-4 text-sm">
          {project.liveUrl ? (
            <a className="text-cyan-300 hover:text-cyan-200" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live URL
            </a>
          ) : null}
          {project.repoUrl ? (
            <a className="text-cyan-300 hover:text-cyan-200" href={project.repoUrl} target="_blank" rel="noreferrer">
              Source Code
            </a>
          ) : null}
        </div>
      </section>
    </main>
  );
}
