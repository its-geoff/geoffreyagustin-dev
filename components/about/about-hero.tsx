"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/motion";

export function AboutHero() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          title="About Me"
          description="Getting to know me beyond the code - my journey, my passions, and what makes me tick."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="prose prose-lg max-w-3xl text-muted-foreground">
          <p className="text-lg leading-relaxed">
            I{"'"}m a Computer Engineering student with a passion for building
            innovative solutions that bridge hardware and software. My journey in
            tech started with curiosity about how things work, and it has evolved
            into a deep commitment to creating meaningful technology.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            When I{"'"}m not coding or studying circuits, you{"'"}ll find me
            exploring new ideas, working on side projects, or staying up to date
            with the latest developments in the tech world. I believe that the
            best engineers are lifelong learners, and I try to embody that
            philosophy every day.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
