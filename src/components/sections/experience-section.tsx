
"use client";

import { SectionWrapper, MotionDiv } from "@/components/section-wrapper";
import { TimelineItem } from "@/components/timeline-item";
import { experienceData } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Career Path" subtitle="My professional journey and contributions.">
      {/* Removed the single vertical timeline line */}
      <MotionDiv className="grid md:grid-cols-2 gap-8"> {/* Changed to grid layout */}
        {experienceData.map((exp) => (
          <TimelineItem
            key={exp.id}
            item={exp}
            // alignLeft and isLast props are no longer needed for the new grid layout
          />
        ))}
      </MotionDiv>
    </SectionWrapper>
  );
}
