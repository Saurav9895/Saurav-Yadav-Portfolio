"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { ProjectCard } from "@/components/project-card";
import { projectsData } from "@/data/portfolio-data";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="My Creations" subtitle="A selection of projects I've worked on.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
