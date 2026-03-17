import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { Background } from "@/components/about/background";
import { Interests } from "@/components/about/interests";

export const metadata: Metadata = {
  title: "About | Geoffrey Agustin",
  description:
    "Learn more about Geoffrey Agustin - background, education, interests, and hobbies.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Background />
      <Interests />
    </>
  );
}
