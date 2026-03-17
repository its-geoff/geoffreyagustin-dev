"use client";

import { motion } from "framer-motion";
import {
  Gamepad2,
  Music,
  Camera,
  BookOpen,
  Dumbbell,
  Plane,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const interests = [
  {
    icon: Gamepad2,
    title: "Gaming",
    description:
      "Enjoy competitive and story-driven games. Gaming helps me unwind and often inspires creative problem-solving approaches.",
  },
  {
    icon: Music,
    title: "Music",
    description:
      "Always have music playing while coding. From lo-fi beats to alternative rock, music fuels my productivity and creativity.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capturing moments and exploring visual composition. It teaches me to pay attention to details and see things from different angles.",
  },
  {
    icon: BookOpen,
    title: "Reading",
    description:
      "Love diving into tech articles, sci-fi novels, and personal development books. Continuous learning is key to growth.",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description:
      "Regular workouts keep me energized and focused. A healthy body supports a sharp mind for tackling complex problems.",
  },
  {
    icon: Plane,
    title: "Travel",
    description:
      "Exploring new places and cultures broadens my perspective. Every trip teaches me something new about the world and myself.",
  },
];

export function Interests() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          title="Beyond the Code"
          description="Life isn't all about programming. Here's what I enjoy when I step away from the keyboard."
        />
      </FadeIn>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest) => (
          <StaggerItem key={interest.title}>
            <motion.div
              className="p-6 bg-card rounded-xl border border-border h-full"
              whileHover={{ y: -4, borderColor: "var(--primary)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <interest.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {interest.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
