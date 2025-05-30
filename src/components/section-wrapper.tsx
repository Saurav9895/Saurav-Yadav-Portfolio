"use client";

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut',
      staggerChildren: 0.2 
    } 
  },
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  id, 
  className = '', 
  title, 
  subtitle,
  titleClassName = 'text-3xl md:text-4xl font-bold mb-4 text-primary',
  variants = defaultVariants 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className={cn("py-16 md:py-24 w-full min-h-[60vh] flex flex-col justify-center", className)}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="container mx-auto px-4">
        {title && (
          <motion.h2 
            className={cn("text-center", titleClassName)}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}}}
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <motion.p 
            className="text-center text-lg text-muted-foreground mb-12"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 }}}}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </motion.section>
  );
};

export const MotionDiv = motion.div;
export const MotionH3 = motion.h3;
export const MotionP = motion.p;
export const MotionImg = motion.img;
export const MotionButton = motion(Button); // Assuming Button is from "@/components/ui/button"

// If Button is not a motion component by default and we need to import it
import { Button } from "@/components/ui/button"; 
// Then MotionButton can be defined as above.
