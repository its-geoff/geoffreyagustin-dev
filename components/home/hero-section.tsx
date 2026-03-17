"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { FadeIn, GlowingOrb } from "@/components/motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Background Effects */}
      <GlowingOrb className="w-96 h-96 -top-48 -right-48" />
      <GlowingOrb className="w-80 h-80 -bottom-40 -left-40" />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <FadeIn delay={0}>
              <p className="text-primary font-medium mb-4">Hello, I{"'"}m</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Geoffrey Agustin
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Computer Engineering Student
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg text-pretty leading-relaxed">
                I build elegant solutions at the intersection of hardware and
                software. Passionate about creating technology that makes a
                meaningful impact through clean code and thoughtful design.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/its-geoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/geoffrey-agustin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Profile Image */}
          <FadeIn
            delay={0.2}
            direction="left"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
                <div className="absolute inset-0 rounded-full border-2 border-accent/10 scale-125" />

                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Geoffrey Agustin"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-card rounded-xl px-4 py-2 shadow-lg border border-border"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-sm font-medium text-foreground">San Jose, CA</p>
                </motion.div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
