"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion";

const projects = [
  {
    title: "Gold Medal Statistics",
    description:
      "A Python application that allows users to input track and field marks and compare athletes on their team across different event types. Features statistical analysis and performance visualization to help coaches and athletes track progress over time.",
    image: "/images/projects/gold-medal-statistics.jpg",
    tags: ["Python", "Data Analysis", "Sports Tech"],
    github: "https://github.com/its-geoff/gold-medal-statistics",
    featured: true,
  },
  {
    title: "Course Companion",
    description:
      "A comprehensive homework tracker built in C++ that allows students to track assignments, estimate grades based on weighted categories, and organize their class schedules. Designed to help students stay on top of their academic workload.",
    image: "/images/projects/course-companion.jpg",
    tags: ["C++", "Education", "Productivity"],
    github: "https://github.com/its-geoff/course-companion",
    featured: true,
  },
  {
    title: "NeuroSync",
    description:
      "An innovative project that uses an EEG headband with connected software to filter brainwaves and translate them into emotions. Combines hardware interfacing with signal processing to create a real-time emotion detection system.",
    image: "/images/projects/neurosync.jpg",
    tags: ["SystemVerilog", "EEG", "Signal Processing", "Hardware"],
    github: "https://github.com/its-geoff/neurosync",
    featured: true,
  },
];

export function ProjectsGrid() {
  return (
    <StaggerContainer className="space-y-8">
      {projects.map((project, index) => (
        <StaggerItem key={project.title}>
          <motion.article
            className={`grid lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Image */}
            <div
              className={`relative aspect-video rounded-xl overflow-hidden border border-border shadow-lg ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className={index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}>
              <div
                className={`flex flex-wrap gap-2 mb-4 ${
                  index % 2 === 1 ? "lg:justify-end" : ""
                }`}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {project.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div
                className={`flex items-center gap-4 ${
                  index % 2 === 1 ? "lg:justify-end" : ""
                }`}
              >
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Divider */}
          {index < projects.length - 1 && (
            <div className="border-t border-border my-12" />
          )}
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
