"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/motion";

export function AboutHero() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          title="About Me"
          description="Get to know my journey, my passions, and my motivation."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="prose prose-lg max-w-3xl text-muted-foreground">
          <p className="text-lg leading-relaxed">
            I{"'"}m a Computer Engineering student with a passion for robotics,
            test development, and QA. My passion for software engineering comes
            from a childhood love for puzzles. I have a knack for riddles,
            sudoku, and crossword puzzles. I love untangling complex problems; 
            there's nothing like the moment everything clicks into place.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            When I{"'"}m not developing apps, you can find me
            exploring new test frameworks and tooling, traveling with
            family, or watching engineering content. To me, engineering is about
            exploring beyond the top level and connecting the dots between each
            layer. The "aha" moment at the end makes the entire process worth it.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
