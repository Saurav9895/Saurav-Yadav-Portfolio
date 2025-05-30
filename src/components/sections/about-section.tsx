
"use client";

import Image from "next/image";
import { SectionWrapper, MotionDiv, MotionH3, MotionP, MotionImg } from "@/components/section-wrapper";
import { aboutMeData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { UserCircle, Book, Code, Zap } from "lucide-react";

export function AboutSection() {
  const imageVariants = {
    initial: { scale: 0.9, opacity: 0 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    inView: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } },
  };

  const textContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  return (
    <SectionWrapper id="about" title="About Me" subtitle="A little bit about my journey and passion.">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <MotionDiv 
          className="md:col-span-1 flex justify-center"
          variants={imageVariants}
          initial="initial"
          whileInView="inView"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50"
            whileHover={{ rotateY: 10, rotateX: -5, transition: { duration: 0.3 } }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={aboutMeData.profileImageUrl}
              alt="Saurav Kumar Yadav"
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 ease-out group-hover:scale-110"
              data-ai-hint={aboutMeData.profileImageHint}
            />
          </motion.div>
        </MotionDiv>
        <MotionDiv 
          className="md:col-span-2 space-y-6"
          variants={textContentVariants}
        >
          <MotionH3 variants={paragraphVariants} className="text-2xl font-semibold text-foreground flex items-center">
            <UserCircle className="mr-3 h-7 w-7 text-primary" /> Who I Am
          </MotionH3>
          <MotionP variants={paragraphVariants} className="text-lg text-muted-foreground leading-relaxed">
            {aboutMeData.introduction}
          </MotionP>
          
          <MotionH3 variants={paragraphVariants} className="text-2xl font-semibold text-foreground flex items-center">
            <Book className="mr-3 h-7 w-7 text-primary" /> Education & Achievements
          </MotionH3>
          <MotionP variants={paragraphVariants} className="text-lg text-muted-foreground leading-relaxed">
            {aboutMeData.education}
          </MotionP>

          <MotionH3 variants={paragraphVariants} className="text-2xl font-semibold text-foreground flex items-center">
            <Zap className="mr-3 h-7 w-7 text-primary" /> Passion & Drive
          </MotionH3>
          <MotionP variants={paragraphVariants} className="text-lg text-muted-foreground leading-relaxed">
            {aboutMeData.passion}
          </MotionP>
        </MotionDiv>
      </div>
    </SectionWrapper>
  );
}
