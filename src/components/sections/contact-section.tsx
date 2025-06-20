
"use client";

import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { SectionWrapper, MotionDiv } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Linkedin, Mail, Phone, Send, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/saurav-yadav-434842207/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/saurav.yadav.65256" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/_y.saurav_/" },
];

export function ContactSection() {
  const {
    register,
    // handleSubmit is no longer used directly on the form's onSubmit
    formState: { errors },
    // reset is no longer called after submit
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    // If you want errors to show up as the user types or blurs,
    // you might consider changing the mode:
    // mode: "onChange" or "onBlur"
  });

  const inputVariants = {
    rest: { scale: 1, boxShadow: "0px 0px 0px hsla(var(--primary), 0)" },
    hover: { scale: 1.02, boxShadow: "0px 0px 8px hsla(var(--primary), 0.3)" },
    focus: { scale: 1.03, boxShadow: "0px 0px 10px hsla(var(--primary), 0.5)" },
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Let's build something amazing together.">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <MotionDiv className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out via email, phone, or connect with me on social media.
            </p>
            <div className="space-y-4">
              <motion.a whileHover={{x:5}} href="mailto:sauravkumaryadav309@gmail.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Mail className="mr-3 h-5 w-5 text-primary" /> sauravkumaryadav309@gmail.com
              </motion.a>
              <motion.a whileHover={{x:5}} href="tel:+919155917535" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Phone className="mr-3 h-5 w-5 text-primary" /> +91-9155917535
              </motion.a>
              <motion.a whileHover={{x:5}} href="tel:+9779842483338" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Phone className="mr-3 h-5 w-5 text-primary" /> +977-9842483338
              </motion.a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Connect With Me</h3>
             <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.div whileHover={{ scale: 1.2, y: -3 }} key={link.name}>
                    <Button asChild variant="outline" size="icon" className="rounded-full border-2 hover:border-primary hover:text-primary">
                      <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                        <link.icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
          </div>
        </MotionDiv>

        <MotionDiv className="bg-card p-6 sm:p-8 rounded-xl shadow-2xl border border-border">
          <form
            action="https://formsubmit.co/d05b9a01cadd0e30d9d19750244bbc07"
            method="POST"
            className="space-y-6"
            // Removed onSubmit prop to use direct HTML form submission
          >
            {/* Hidden field for subject */}
            <input type="hidden" name="_subject" value="New Contact Form Submission - SK Yadav Portfolio" />
            {/* Optional: redirect to a thank you page on your site */}
            {/* <input type="hidden" name="_next" value="https://yoursite.com/thankyou.html" /> */}
            {/* Optional: disable captcha (not recommended for live sites) */}
            {/* <input type="hidden" name="_captcha" value="false" /> */}

            <motion.div variants={inputVariants} initial="rest" whileHover="hover" whileFocus="focus">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your Name" {...register("name")} className="mt-1"/>
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
            </motion.div>

            <motion.div variants={inputVariants} initial="rest" whileHover="hover" whileFocus="focus">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" {...register("email")} className="mt-1"/>
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </motion.div>

            <motion.div variants={inputVariants} initial="rest" whileHover="hover" whileFocus="focus">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                rows={5}
                {...register("message")}
                className="mt-1"
              />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button type="submit" className="w-full group">
                <Send className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Send Message
              </Button>
            </div>
          </form>
        </MotionDiv>
      </div>
    </SectionWrapper>
  );
}
