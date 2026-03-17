"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const toolCategories = [
  {
    name: "Languages",
    tools: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        level: "Advanced",
      },
      {
        name: "C/C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        level: "Advanced",
      },
      {
        name: "MATLAB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
        level: "Intermediate",
      },
      {
        name: "SystemVerilog",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        level: "Intermediate",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        level: "Intermediate",
      },
    ],
  },
  {
    name: "Frameworks & Libraries",
    tools: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: "Learning",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        level: "Learning",
      },
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        level: "Intermediate",
      },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        level: "Intermediate",
      },
    ],
  },
  {
    name: "Tools & Platforms",
    tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        level: "Advanced",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        level: "Advanced",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        level: "Advanced",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        level: "Intermediate",
      },
    ],
  },
  {
    name: "Hardware & Embedded",
    tools: [
      {
        name: "Arduino",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
        level: "Intermediate",
      },
      {
        name: "Raspberry Pi",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
        level: "Intermediate",
      },
    ],
  },
];

const levelColors: Record<string, string> = {
  Advanced: "bg-green-500/10 text-green-600 dark:text-green-400",
  Intermediate: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Learning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export function ToolsGrid() {
  return (
    <div className="space-y-12">
      {toolCategories.map((category, categoryIndex) => (
        <FadeIn key={category.name} delay={categoryIndex * 0.1}>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {category.name}
            </h3>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.tools.map((tool) => (
                <StaggerItem key={tool.name}>
                  <motion.div
                    className="group relative p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors text-center"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>

                    {/* Name */}
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      {tool.name}
                    </h4>

                    {/* Level */}
                    <span
                      className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${levelColors[tool.level]}`}
                    >
                      {tool.level}
                    </span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      ))}

      {/* Additional Info */}
      <FadeIn delay={0.4}>
        <div className="mt-12 p-6 bg-muted/50 rounded-xl border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Always Learning
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Technology evolves rapidly, and so do I. I{"'"}m constantly exploring
            new tools and frameworks to expand my skill set. Currently, I{"'"}m
            diving deeper into web development with React and Next.js, while
            continuing to strengthen my foundation in embedded systems and signal
            processing.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
