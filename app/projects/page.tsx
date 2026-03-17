import { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Projects | Geoffrey Agustin",
  description:
    "Featured projects by Geoffrey Agustin - Gold Medal Statistics, Course Companion, and NeuroSync.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          title="Featured Projects"
          description="A collection of projects that showcase my skills and passion for building meaningful technology."
        />
      </FadeIn>
      <ProjectsGrid />
    </Section>
  );
}
