"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
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
                    <GithubIcon className="w-5 h-5" />
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
                    <LinkedinIcon className="w-5 h-5" />
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
