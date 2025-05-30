"use client";

import { SectionWrapper, MotionDiv } from "@/components/section-wrapper";
import { TimelineItem } from "@/components/timeline-item";
import { experienceData } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Career Path" subtitle="My professional journey and contributions.">
      <div className="relative">
        {/* Vertical line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2"></div>
        
        <MotionDiv className="space-y-12 md:space-y-0">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className={`md:mb-12`}> {/* Add margin for spacing between items on desktop */}
              <TimelineItem 
                item={exp} 
                isLast={index === experienceData.length - 1}
                alignLeft={index % 2 === 0} 
              />
            </div>
          ))}
        </MotionDiv>
      </div>
    </SectionWrapper>
  );
}
