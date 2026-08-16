
"use client";

import { SectionWrapper, MotionDiv } from "@/components/section-wrapper";
import { freelanceData } from "@/data/portfolio-data";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function FreelancingSection() {
  return (
    <SectionWrapper id="freelancing" title="Freelancing" subtitle="Independent projects delivered for clients.">
      <MotionDiv className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {freelanceData.map((project) => {
          const Icon = project.icon as LucideIcon | undefined;
          return (
            <div
              key={project.id}
              className="flex flex-col bg-card border border-border rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 p-5 border-b border-border">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                  {Icon ? (
                    <Icon className="w-5 h-5" />
                  ) : (
                    <span className="text-lg font-bold">{project.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">{project.name}</h3>
                  <p className="text-xs text-primary">{project.client}</p>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 gap-3">
                <p className="text-sm text-muted-foreground flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </MotionDiv>
    </SectionWrapper>
  );
}
