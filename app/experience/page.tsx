import { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Experience | Geoffrey Agustin",
  description:
    "Professional experience and internships by Geoffrey Agustin.",
};

export default function ExperiencePage() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          title="Professional Experience"
          description="My journey through the industry, gaining hands-on experience and contributing to meaningful projects."
        />
      </FadeIn>
      <ExperienceTimeline />
    </Section>
  );
}
