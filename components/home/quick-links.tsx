"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, Code2, FolderGit2, User } from "lucide-react";
import { Section } from "@/components/section";
import { StaggerContainer, StaggerItem } from "@/components/motion";

const links = [
  {
    href: "/about",
    icon: User,
    title: "About Me",
    description: "Learn more about my background, interests, and what drives me.",
  },
  {
    href: "/projects",
    icon: FolderGit2,
    title: "Projects",
    description: "Explore my featured projects and technical work.",
  },
  {
    href: "/experience",
    icon: Briefcase,
    title: "Experience",
    description: "View my professional experience and roles.",
  },
  {
    href: "/tools",
    icon: Code2,
    title: "Tech Stack",
    description: "See the technologies and tools I work with.",
  },
];

export function QuickLinks() {
  return (
    <Section className="bg-muted/30">
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {links.map((link) => (
          <StaggerItem key={link.href}>
            <Link href={link.href} className="block h-full">
              <motion.div
                className="h-full p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {link.description}
                </p>
              </motion.div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
