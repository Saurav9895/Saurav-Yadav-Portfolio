"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { AchievementTile } from "@/components/achievement-tile";
import { achievementsData } from "@/data/portfolio-data";

export function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" title="Milestones & Recognition" subtitle="Key accomplishments and awards.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((achievement, index) => (
          <AchievementTile key={achievement.id} achievement={achievement} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
