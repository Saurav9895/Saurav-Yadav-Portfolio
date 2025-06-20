
"use client";

import { SectionWrapper, MotionDiv } from "@/components/section-wrapper";
import { SkillBadge } from "@/components/skill-badge";
import { skillsData, SkillCategory } from "@/data/portfolio-data";
import type { LucideIcon } from "lucide-react";

export function SkillsSection() {
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionWrapper id="skills" title="My Tech Arsenal" subtitle="Technologies and tools I'm proficient with.">
      <div className="grid md:grid-cols-2 gap-8">
        {skillsData.map((category: SkillCategory, categoryIndex: number) => {
          const CategoryIcon = category.icon as LucideIcon;
          return (
            <MotionDiv 
              key={category.name} 
              className="p-6 bg-card rounded-xl shadow-lg border border-border h-full" // Added h-full for consistent card height if needed
              variants={categoryVariants}
              // initial="hidden" // Handled by SectionWrapper's staggerChildren
              // animate="visible" // Handled by SectionWrapper's staggerChildren
              // viewport={{ once: true, amount: 0.3 }} // Handled by SectionWrapper
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
                {CategoryIcon && <CategoryIcon className="mr-3 h-7 w-7 text-primary" />}
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skill.name} skill={skill} index={skillIndex} />
                ))}
                            </div>
            </MotionDiv>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
