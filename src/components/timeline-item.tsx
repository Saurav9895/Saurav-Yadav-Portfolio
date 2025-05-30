"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/portfolio-data";
import type { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  item: Experience; 
  isLast: boolean;
  alignLeft: boolean;
}

export function TimelineItem({ item, isLast, alignLeft }: TimelineItemProps) {
  const Icon = item.icon as LucideIcon | undefined;

  const itemVariants = {
    hidden: { opacity: 0, x: alignLeft ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className={`relative flex items-start ${alignLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      variants={itemVariants}
    >
      {/* Timeline Connector & Dot */}
      <div className={`hidden md:flex flex-col items-center mr-6 ml-6 ${alignLeft ? 'md:ml-0 md:mr-6' : 'md:mr-0 md:ml-6'}`}>
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
          {Icon ? <Icon className="w-5 h-5" /> : <span className="text-lg font-bold">{item.company.charAt(0)}</span>}
        </div>
        {!isLast && <div className="w-px h-full bg-border grow my-2"></div>}
      </div>
      
      {/* Content Card */}
      <div className="border border-border bg-card p-6 rounded-xl shadow-lg w-full md:w-[calc(50%-3rem)]">
         {/* Mobile Icon and Line */}
        <div className="md:hidden flex items-center mb-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md mr-4">
            {Icon ? <Icon className="w-5 h-5" /> : <span className="text-lg font-bold">{item.company.charAt(0)}</span>}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
            <p className="text-sm text-primary">{item.company}</p>
          </div>
        </div>
        <div className="hidden md:block">
          <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
          <p className="text-sm text-primary mb-1">{item.company}</p>
        </div>
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
