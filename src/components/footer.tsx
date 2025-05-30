"use client";

import Link from "next/link";
import { Github, Linkedin, Code2, Mail, Phone, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/sauravkumaryadav309" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/saurav-kumar-yadav-iit-dhanbad" },
  { name: "LeetCode", icon: Code2, href: "https://leetcode.com/sauravkumaryadav309/" },
  { name: "Email", icon: Mail, href: "mailto:sauravkumaryadav309@gmail.com" },
  { name: "Phone", icon: Phone, href: "tel:+919155917535" },
];

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  return (
    <footer className="bg-secondary/50 text-secondary-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.9 }}
              className="text-secondary-foreground transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
        <motion.p 
          className="text-sm mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Made with ❤️ by Saurav Kumar Yadav
        </motion.p>
        <motion.p 
          className="text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          &copy; {new Date().getFullYear()} Saurav Kumar Yadav. All rights reserved.
        </motion.p>
      </div>
      {isVisible && (
         <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
          aria-label="Scroll to top"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </footer>
  );
}
