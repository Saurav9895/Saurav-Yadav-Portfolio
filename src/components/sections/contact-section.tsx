"use client";

import React, { useState, useRef } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { tailorContactMessage } from "@/ai/flows/tailor-contact-message";

import { SectionWrapper, MotionDiv } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Code2, Mail, Phone, Bot, Send, Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  jobRole: z.string().optional(),
  companyCulture: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/sauravkumaryadav309" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/saurav-kumar-yadav-iit-dhanbad" },
  { name: "LeetCode", icon: Code2, href: "https://leetcode.com/sauravkumaryadav309/" },
];

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTailoring, setIsTailoring] = useState(false);
  const [tailoredMessage, setTailoredMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const originalMessage = watch("message");
  const jobRole = watch("jobRole");
  const companyCulture = watch("companyCulture");

  const handleTailorMessage = async () => {
    if (!originalMessage || !jobRole || !companyCulture) {
      toast({
        title: "Missing Information",
        description: "Please provide original message, job role, and company culture to tailor the message.",
        variant: "destructive",
      });
      return;
    }
    setIsTailoring(true);
    try {
      const result = await tailorContactMessage({
        originalMessage,
        jobRole,
        companyCulture,
      });
      setTailoredMessage(result.tailoredMessage);
      setValue("message", result.tailoredMessage); // Update the main message field
      toast({
        title: "Message Tailored!",
        description: "AI has updated your message. You can edit it further or send.",
      });
    } catch (error) {
      console.error("Error tailoring message:", error);
      toast({
        title: "Error Tailoring Message",
        description: "Could not tailor the message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTailoring(false);
    }
  };

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsSubmitting(true);
    
    // Ensure environment variables are set for EmailJS
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      toast({
        title: "Configuration Error",
        description: "Email service is not configured correctly. Please contact the administrator.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    if (!formRef.current) {
        toast({
            title: "Error",
            description: "Form reference not found.",
            variant: "destructive",
        });
        setIsSubmitting(false);
        return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current , userId);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      reset();
      setTailoredMessage(null);
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error Sending Message",
        description: "Could not send your message. Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            
            <h4 className="text-md font-semibold text-foreground border-t border-border pt-4">AI Message Tailoring (Optional)</h4>
             <motion.div variants={inputVariants} initial="rest" whileHover="hover" whileFocus="focus">
              <Label htmlFor="jobRole">Job Role (for AI tailoring)</Label>
              <Input id="jobRole" placeholder="e.g., Frontend Developer" {...register("jobRole")} className="mt-1"/>
            </motion.div>

            <motion.div variants={inputVariants} initial="rest" whileHover="hover" whileFocus="focus">
              <Label htmlFor="companyCulture">Company Culture (for AI tailoring)</Label>
              <Input id="companyCulture" placeholder="e.g., Fast-paced, innovative, collaborative" {...register("companyCulture")} className="mt-1"/>
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
              <Button
                type="button"
                variant="outline"
                onClick={handleTailorMessage}
                disabled={isTailoring || !originalMessage || !jobRole || !companyCulture}
                className="w-full sm:w-auto group"
              >
                {isTailoring ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4 group-hover:text-accent transition-colors" />
                )}
                Tailor with AI
              </Button>
              <Button type="submit" disabled={isSubmitting} className="w-full sm:flex-1 group">
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Send className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                )}
                Send Message
              </Button>
            </div>
          </form>
        </MotionDiv>
      </div>
    </SectionWrapper>
  );
}
