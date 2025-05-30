"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Achievement } from "@/data/portfolio-data";
import type { LucideIcon } from "lucide-react";

interface AchievementTileProps {
  achievement: Achievement;
  index: number;
}

export function AchievementTile({ achievement, index }: AchievementTileProps) {
  const tileVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.3, delay: index * 0.08, ease: "easeOut" } 
    },
  };
  
  const Icon = achievement.icon as LucideIcon;

  return (
    <motion.div
      variants={tileVariants}
      whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 6px 16px hsla(var(--accent),0.3)" }}
      className="transform transition-all duration-200 h-full"
    >
      <Card className="h-full text-center bg-card hover:border-accent transition-colors duration-300 shadow-md hover:shadow-lg">
        <CardHeader className="items-center pb-3">
          <motion.div 
            className="p-3 bg-accent/10 rounded-full mb-3"
            whileHover={{ rotate: [0, 10, -10, 0], transition: { duration: 0.5, repeat: Infinity } }}
          >
            <Icon className="h-8 w-8 text-accent" />
          </motion.div>
          <CardTitle className="text-lg font-semibold text-foreground">{achievement.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {achievement.description}
            {achievement.year && <span className="block text-xs mt-1">({achievement.year})</span>}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
