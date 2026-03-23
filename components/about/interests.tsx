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
      "Really into strategy and multiplayer games; adapting on the fly leads to creative problem-solving approaches.",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description:
      "Staying active is a big part of my routine! Hitting the gym regularly helps me stay sharp and bring energy to whatever I'm working on.",
  },
  {
    icon: Plane,
    title: "Travel",
    description:
      "Love exploring new places when I get the chance. Every trip broadens my perspective and teaches me more than I expect.",
  },
];

export function Interests() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          title="Beyond the Code"
          description="Life isn't all about programming. Here's what I enjoy when I step away from work."
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
