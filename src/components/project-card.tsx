"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/portfolio-data";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4, delay: index * 0.1, ease: "easeOut" } 
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: "0px 10px 20px hsla(var(--primary), 0.2)" }}
      className="h-full transform transition-all duration-300"
    >
      <Card className="h-full flex flex-col overflow-hidden border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl">
        {project.imageUrl && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={project.imageHint || "project image"}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground mb-3 h-20 overflow-y-auto">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto pt-4 border-t border-border">
          <div className="flex space-x-2 w-full">
            {project.githubLink && (
              <Button asChild variant="outline" size="sm" className="flex-1 group">
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" /> GitHub
                </Link>
              </Button>
            )}
            {project.liveDemoLink && (
              <Button asChild variant="default" size="sm" className="flex-1 group">
                <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                 <ExternalLink className="mr-2 h-4 w-4 group-hover:text-accent-foreground transition-colors" /> Live Demo
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
