"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Building2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const experiences = [
  {
    company: "Intuitive",
    logo: "/images/companies/intuitive.jpg",
    role: "Software Engineering Intern",
    type: "Internship",
    location: "Sunnyvale, CA",
    period: "Summer 2024",
    description:
      "Contributed to software development for robotic surgical systems at a leading medical technology company. Worked alongside experienced engineers on projects that directly impact patient care and surgical precision.",
    responsibilities: [
      "Developed and tested software components for robotic surgical systems",
      "Collaborated with cross-functional teams including hardware and clinical engineers",
      "Participated in code reviews and followed best practices for medical device software",
      "Gained experience with software development in a highly regulated industry",
    ],
    skills: ["C++", "Python", "Software Testing", "Medical Devices", "Agile"],
    website: "https://www.intuitive.com",
  },
];

export function ExperienceTimeline() {
  return (
    <StaggerContainer className="space-y-8">
      {experiences.map((experience) => (
        <StaggerItem key={`${experience.company}-${experience.role}`}>
          <motion.div
            className="bg-card rounded-xl border border-border overflow-hidden"
            whileHover={{ y: -4, borderColor: "var(--primary)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Header */}
            <div className="p-6 border-b border-border bg-muted/30">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Company Logo */}
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-border bg-card shrink-0">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Company Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-foreground">
                      {experience.role}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {experience.type}
                    </span>
                  </div>

                  <Link
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                  >
                    {experience.company}
                    <ExternalLink className="w-3 h-3" />
                  </Link>

                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </StaggerItem>
      ))}

      {/* Looking for more */}
      <FadeIn delay={0.3}>
        <div className="text-center py-8">
          <Building2 className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
          <p className="text-muted-foreground">
            More experiences coming soon as I continue my professional journey.
          </p>
        </div>
      </FadeIn>
    </StaggerContainer>
  );
}
