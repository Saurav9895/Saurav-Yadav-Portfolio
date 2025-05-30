
"use client";

import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react"; // Removed Download icon
import { heroSkillsSequence } from "@/data/portfolio-data";
import Link from "next/link";
import React from "react";

const Particle = ({ delay }: { delay: number }) => {
  const animationClass = ['animation-particle-slow', 'animation-particle-medium', 'animation-particle-fast'][Math.floor(Math.random() * 3)];
  return (
    <motion.div
      className={`absolute rounded-full bg-primary/30`}
      style={{
        width: `${Math.random() * 5 + 2}px`,
        height: `${Math.random() * 5 + 2}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
      }}
      animate={{
        y: [0, Math.random() * 100 - 50, 0],
        x: [0, Math.random() * 100 - 50, 0],
        scale: [1, 1.5, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};


export function HeroSection() {
  const name = "Saurav Kumar Yadav";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen py-20 text-center overflow-hidden bg-gradient-to-br from-background to-secondary/30">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 opacity-70 dark:opacity-50">
        {Array.from({ length: 30 }).map((_, i) => (
          <Particle key={i} delay={Math.random() * 5} />
        ))}
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-foreground"
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.5, duration: 0.3 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl md:text-2xl text-muted-foreground"
          >
            Software Engineer | Web Developer
          </motion.p>
          <motion.div variants={itemVariants} className="mt-4 text-2xl md:text-3xl font-semibold text-primary h-10">
            <AnimatedText sequence={heroSkillsSequence} />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* "View Resume" button removed */}
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-accent/50 transform transition-all duration-300 hover:scale-105 hover:border-accent">
              <Link href="#contact">
                Let&apos;s Connect <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse", ease:"easeInOut" }}
      >
        <ArrowRight className="h-8 w-8 text-primary/50 rotate-90" />
      </motion.div>
    </section>
  );
}
