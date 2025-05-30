"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Publication } from "@/data/portfolio-data";
import { ExternalLink, FileText } from "lucide-react"; // Using FileText as a generic publication icon

interface PublicationCardProps {
  publication: Publication;
  index: number;
}

export function PublicationCard({ publication, index }: PublicationCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, delay: index * 0.1, ease: "easeOut" } 
    },
  };

  const PublisherIcon = publication.publisherIcon || FileText;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, boxShadow: "0px 8px 18px hsla(var(--primary), 0.15)" }}
      className="h-full transform transition-all duration-300"
    >
      <Card className="h-full flex flex-col overflow-hidden border-border hover:border-primary/70 transition-all duration-300 shadow-lg">
        <CardHeader className="flex flex-row items-start space-x-4 pb-3">
          <div className="p-2 bg-primary/10 rounded-md">
            <PublisherIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold text-foreground leading-tight">{publication.title}</CardTitle>
            <CardDescription className="text-xs text-muted-foreground pt-1">{publication.conference} - {publication.year}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-grow pb-4">
          {/* Authors paragraph removed */}
        </CardContent>
        <div className="mt-auto p-4 pt-2 border-t border-border">
          <Button asChild variant="link" className="text-primary p-0 h-auto hover:text-primary/80">
            <Link href={publication.link} target="_blank" rel="noopener noreferrer">
              Read Paper <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
