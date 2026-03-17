"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, Code2, FolderGit2, User, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { SpotlightCard, LiftCard } from "@/components/interactive";

const links = [
  {
    href: "/about",
    icon: User,
    title: "About Me",
    description: "Learn more about my background, interests, and what drives me.",
    color: "#7BAFD4",
  },
  {
    href: "/projects",
    icon: FolderGit2,
    title: "Projects",
    description: "Explore my featured projects and technical work.",
    color: "#5a9bc9",
  },
  {
    href: "/experience",
    icon: Briefcase,
    title: "Experience",
    description: "View my professional experience and roles.",
    color: "#4a8ab8",
  },
  {
    href: "/tools",
    icon: Code2,
    title: "Tech Stack",
    description: "See the technologies and tools I work with.",
    color: "#3a7aa8",
  },
];

export function QuickLinks() {
  return (
    <Section className="bg-muted/30">
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {links.map((link, index) => (
          <StaggerItem key={link.href}>
            <LiftCard className="w-full h-full">
              <Link href={link.href} className="block h-full">
                <SpotlightCard className="h-full">
                  <div
                    className="h-full p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Background gradient on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${link.color}10 0%, transparent 50%)`,
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with animated background */}
                      <div className="relative w-14 h-14 mb-4">
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-20"
                          style={{ backgroundColor: link.color }}
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.2 }}
                        />
                        <div className="relative w-full h-full rounded-xl flex items-center justify-center">
                          <link.icon className="w-6 h-6" style={{ color: link.color }} />
                        </div>
                      </div>

                      {/* Title with arrow */}
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {link.title}
                        </h3>
                        <motion.div
                          initial={{ x: -4, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          className="text-muted-foreground group-hover:text-primary transition-colors"
                        >
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {link.description}
                      </p>

                      {/* Bottom line indicator */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ backgroundColor: link.color }}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </LiftCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Stats Section */}
      <motion.div
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        {[
          { label: "Projects Completed", value: "10+" },
          { label: "Technologies Used", value: "15+" },
          { label: "Years Coding", value: "4+" },
          { label: "Cups of Coffee", value: "999+" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
          >
            <motion.div
              className="text-3xl md:text-4xl font-bold text-primary mb-1"
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + 0.1 * index, type: "spring" }}
            >
              {stat.value}
            </motion.div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
