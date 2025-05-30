"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/data/portfolio-data";
import type { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  const Icon = skill.icon as LucideIcon | undefined;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5, boxShadow: "0px 5px 15px hsla(var(--primary), 0.3)"}}
      className="transform"
    >
      <Badge 
        variant="secondary" 
        className="text-sm md:text-base px-4 py-2 rounded-lg shadow-md cursor-default flex items-center gap-2 border border-transparent hover:border-primary transition-all"
      >
        {Icon && <Icon className="h-4 w-4 text-primary" />}
        {skill.name}
      </Badge>
    </motion.div>
  );
}
