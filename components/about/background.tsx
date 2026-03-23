"use client";

import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const education = [
  {
    institution: "San Jose State University",
    degree: "B.S. Computer Engineering",
    minor: "Business Minor",
    location: "San Jose, CA",
    period: "August 2022 - May 2026",
    highlights: [
      "President's Scholar (Spring 2023)",
      "Dean's Scholar (Fall 2022 - Fall 2025)",
      "A.S. 55 Award (2025)",
      "Relevant Coursework: Fundamentals of Management & Organizational Behavior, Software Engineering I, Introduction to Marketing",
    ],
  },
];

const milestones = [
  {
    year: "2022",
    title: "Started University",
    description:
      "Began my Computer Engineering journey at San Jose State University, earning Dean's Scholar honors in my first semester.",
  },
  {
    year: "2023",
    title: "President's Scholar",
    description:
      "Awarded the President's Scholar distinction in Spring 2023, recognizing academic excellence.",
  },
  {
    year: "2025",
    title: "Internship & Leadership Roles",
    description:
      "Completed a Software Test Engineering internship at Intuitive Surgical and stepped into Vice President roles at Associated Students, SJSU and Tau Beta Pi.",
  },
  {
    year: "2026",
    title: "Expected Graduation",
    description:
      "On track to graduate with a B.S. in Computer Engineering and a Business minor in May 2026.",
  },
];

export function Background() {
  return (
    <Section className="bg-muted/30">
      <FadeIn>
        <SectionHeader
          title="Background"
          description="My educational journey and key milestones along the way."
        />
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <FadeIn delay={0.1}>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>

            {education.map((edu) => (
              <div
                key={edu.institution}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {edu.institution}
                </h4>
                <p className="text-primary font-medium mb-2">{edu.degree}</p>
                {edu.minor && (
                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.minor}
                  </p>
                )}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn delay={0.2}>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Journey
            </h3>

            <StaggerContainer className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-6">
                {milestones.map((milestone) => (
                  <StaggerItem key={milestone.year}>
                    <div className="relative flex gap-6 pl-12">
                      {/* Timeline dot */}
                      <div className="absolute left-2 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                      <div>
                        <span className="text-sm font-medium text-primary">
                          {milestone.year}
                        </span>
                        <h4 className="text-lg font-semibold text-foreground mt-1">
                          {milestone.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}