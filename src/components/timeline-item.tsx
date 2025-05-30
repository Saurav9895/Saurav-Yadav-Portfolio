
"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/portfolio-data";
import type { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  item: Experience;
  // isLast and alignLeft props are removed as they are not needed for the grid layout
}

export function TimelineItem({ item }: TimelineItemProps) {
  const Icon = item.icon as LucideIcon | undefined;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Simplified animation: slide up
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex items-start w-full gap-x-4 md:gap-x-6" // Consistent gap for spacing
      variants={itemVariants}
      // Framer Motion's `initial` and `animate` props will be handled by SectionWrapper's staggerChildren
    >
      {/* Icon column - always on the left */}
      <div className="flex flex-col items-center pt-1">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
          {Icon ? <Icon className="w-5 h-5" /> : <span className="text-lg font-bold">{item.company.charAt(0)}</span>}
        </div>
        {/* Vertical connecting line removed as it's not suitable for a grid with potentially varying item heights */}
      </div>

      {/* Content column - takes remaining space */}
      <div className="flex-1 bg-card border border-border p-4 md:p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
        <p className="text-sm text-primary mb-1">{item.company}</p>
        <p className="text-xs text-muted-foreground mb-3">{item.period}</p>
        <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
          {item.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
