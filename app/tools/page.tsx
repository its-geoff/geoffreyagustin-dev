import { Metadata } from "next";
import { ToolsGrid } from "@/components/tools/tools-grid";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Tools | Geoffrey Agustin",
  description:
    "Tech stack and tools used by Geoffrey Agustin - Python, C/C++, MATLAB, and more.",
};

export default function ToolsPage() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          title="Tech Stack"
          description="The languages, frameworks, and tools I use to bring ideas to life."
        />
      </FadeIn>
      <ToolsGrid />
    </Section>
  );
}
