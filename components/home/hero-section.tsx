"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { FadeIn, GlowingOrb } from "@/components/motion";
import { Typewriter, MagneticButton, AnimatedCodeBlock } from "@/components/interactive";

const codeSnippet = `const geoffrey = {
  role: "Computer Engineer",
  location: "San Jose, CA",
  passions: [
    "Embedded Systems",
    "Signal Processing",
    "Clean Code"
  ],
  currentFocus: "Building tech 
    that makes an impact"
};`;

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Background Effects */}
      <GlowingOrb className="w-96 h-96 -top-48 -right-48" />
      <GlowingOrb className="w-80 h-80 -bottom-40 -left-40" />

      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px),
                              linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <FadeIn delay={0}>
              <p className="text-primary font-medium mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                Geoffrey Agustin
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-xl md:text-2xl text-muted-foreground mb-6 h-8">
                <Typewriter
                  words={[
                    "Computer Engineer",
                    "Embedded Systems Developer",
                    "Problem Solver",
                    "Creative Thinker",
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  delayBetweenWords={2500}
                />
              </div>
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
                <MagneticButton>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    View My Work
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                  >
                    Learn More
                  </Link>
                </MagneticButton>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex items-center gap-4">
                <MagneticButton strength={0.2}>
                  <Link
                    href="https://github.com/its-geoff"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent hover:border-border transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <Link
                    href="https://linkedin.com/in/geoffrey-agustin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent hover:border-border transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>

          {/* Profile Image + Code Block */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6">
            <FadeIn delay={0.2} direction="left">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  {/* Rotating border */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, var(--primary), transparent, var(--primary))",
                      padding: "3px",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full bg-background" />
                  </motion.div>

                  {/* Image container */}
                  <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-card shadow-2xl">
                    <Image
                      src="/images/profile.jpg"
                      alt="Geoffrey Agustin"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Status badge */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 bg-card rounded-full px-3 py-1.5 shadow-lg border border-border flex items-center gap-2"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs font-medium text-foreground">Open to work</span>
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>

            {/* Code block */}
            <FadeIn delay={0.4} direction="left" className="w-full max-w-sm">
              <AnimatedCodeBlock code={codeSnippet} />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
