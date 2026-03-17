"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { TiltCard, SpotlightCard } from "@/components/interactive";

const projects = [
  {
    title: "Gold Medal Statistics",
    description:
      "A Python application that allows users to input track and field marks and compare athletes on their team across different event types. Features statistical analysis and performance visualization to help coaches and athletes track progress over time.",
    image: "/images/projects/gold-medal-statistics.jpg",
    tags: ["Python", "Data Analysis", "Sports Tech"],
    github: "https://github.com/its-geoff/gold-medal-statistics",
    featured: true,
    color: "#7BAFD4",
  },
  {
    title: "Course Companion",
    description:
      "A comprehensive homework tracker built in C++ that allows students to track assignments, estimate grades based on weighted categories, and organize their class schedules. Designed to help students stay on top of their academic workload.",
    image: "/images/projects/course-companion.jpg",
    tags: ["C++", "Education", "Productivity"],
    github: "https://github.com/its-geoff/course-companion",
    featured: true,
    color: "#5a9bc9",
  },
  {
    title: "NeuroSync",
    description:
      "An innovative project that uses an EEG headband with connected software to filter brainwaves and translate them into emotions. Combines hardware interfacing with signal processing to create a real-time emotion detection system.",
    image: "/images/projects/neurosync.jpg",
    tags: ["SystemVerilog", "EEG", "Signal Processing", "Hardware"],
    github: "https://github.com/its-geoff/neurosync",
    featured: true,
    color: "#4a8ab8",
  },
];

export function ProjectsGrid() {
  return (
    <StaggerContainer className="space-y-16">
      {projects.map((project, index) => (
        <StaggerItem key={project.title}>
          <TiltCard tiltAmount={5} glareEnable={true}>
            <SpotlightCard
              className={`grid lg:grid-cols-2 gap-8 items-center p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm`}
            >
              {/* Image */}
              <motion.div
                className={`relative aspect-video rounded-xl overflow-hidden border border-border shadow-lg group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg transition-shadow"
                  >
                    <FaGithub className="w-4 h-4" />
                    View on GitHub
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Project number */}
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{ backgroundColor: project.color, color: "#0a0a0a" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-background text-foreground"
                      whileHover={{ scale: 1.05, borderColor: project.color }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group">
                  <span
                    className="bg-gradient-to-r from-foreground to-foreground bg-no-repeat bg-[length:0%_2px] bg-left-bottom transition-all duration-500 hover:bg-[length:100%_2px]"
                    style={{ backgroundImage: `linear-gradient(${project.color}, ${project.color})` }}
                  >
                    {project.title}
                  </span>
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg"
                    style={{
                      backgroundColor: project.color,
                      color: "#0a0a0a",
                    }}
                  >
                    <FaGithub className="w-4 h-4" />
                    View Code
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          </TiltCard>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
