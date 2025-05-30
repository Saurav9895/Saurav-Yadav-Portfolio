"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { PublicationCard } from "@/components/publication-card";
import { publicationsData } from "@/data/portfolio-data";

export function PublicationsSection() {
  if (publicationsData.length === 0) {
    return null; // Don't render section if no publications
  }
  return (
    <SectionWrapper id="publications" title="My Research Contributions" subtitle="Published works and academic papers.">
      <div className="grid md:grid-cols-2 gap-8">
        {publicationsData.map((pub, index) => (
          <PublicationCard key={pub.id} publication={pub} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
