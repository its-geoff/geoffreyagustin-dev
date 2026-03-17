"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { SpotlightCard, TiltCard } from "@/components/interactive";

type ProficiencyLevel = "proficient" | "familiar" | "exploring";

interface Tool {
  name: string;
  icon: string;
  level: ProficiencyLevel;
}

interface ToolCategory {
  name: string;
  tools: Tool[];
}

const toolCategories: ToolCategory[] = [
  {
    name: "Languages",
    tools: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        level: "proficient",
      },
      {
        name: "C/C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        level: "proficient",
      },
      {
        name: "MATLAB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
        level: "familiar",
      },
      {
        name: "SystemVerilog",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        level: "familiar",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        level: "exploring",
      },
    ],
  },
  {
    name: "Frameworks & Libraries",
    tools: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: "exploring",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        level: "exploring",
      },
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        level: "familiar",
      },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        level: "familiar",
      },
    ],
  },
  {
    name: "Tools & Platforms",
    tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        level: "proficient",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        level: "proficient",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        level: "proficient",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        level: "familiar",
      },
    ],
  },
  {
    name: "Hardware & Embedded",
    tools: [
      {
        name: "Arduino",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
        level: "familiar",
      },
      {
        name: "Raspberry Pi",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
        level: "familiar",
      },
    ],
  },
];

const proficiencyConfig = {
  proficient: { bars: 3, label: "Proficient", color: "bg-primary" },
  familiar: { bars: 2, label: "Familiar", color: "bg-primary" },
  exploring: { bars: 1, label: "Exploring", color: "bg-primary" },
};

function ProficiencyBars({ level }: { level: ProficiencyLevel }) {
  const config = proficiencyConfig[level];
  
  return (
    <div className="flex flex-col items-center gap-1.5 mt-3">
      <div className="flex gap-1">
        {[1, 2, 3].map((bar) => (
          <motion.div
            key={bar}
            className={`h-1.5 w-5 rounded-full ${
              bar <= config.bars ? config.color : "bg-muted"
            }`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * bar }}
          />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">{config.label}</span>
    </div>
  );
}

export function ToolsGrid() {
  return (
    <div className="space-y-12">
      {toolCategories.map((category, categoryIndex) => (
        <FadeIn key={category.name} delay={categoryIndex * 0.1}>
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-semibold text-foreground">
                {category.name}
              </h3>
              <div className="flex-1 h-px bg-border" />
            </div>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.tools.map((tool) => (
                <StaggerItem key={tool.name}>
                  <TiltCard tiltAmount={8} glareEnable={true}>
                    <SpotlightCard className="h-full">
                      <motion.div
                        className="group relative p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-center h-full"
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {/* Icon */}
                        <motion.div 
                          className="w-14 h-14 mx-auto mb-3 flex items-center justify-center"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <img
                            src={tool.icon}
                            alt={tool.name}
                            className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </motion.div>

                        {/* Name */}
                        <h4 className="text-sm font-medium text-foreground">
                          {tool.name}
                        </h4>

                        {/* Proficiency bars */}
                        <ProficiencyBars level={tool.level} />
                      </motion.div>
                    </SpotlightCard>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      ))}

      {/* Learning Section */}
      <FadeIn delay={0.4}>
        <SpotlightCard className="mt-12 p-8 bg-card rounded-2xl border border-border relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-3 h-3 rounded-full bg-green-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <h3 className="text-lg font-semibold text-foreground">
                Always Learning
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Technology evolves rapidly, and so do I. I{"'"}m constantly exploring
              new tools and frameworks to expand my skill set. Currently, I{"'"}m
              diving deeper into web development with React and Next.js, while
              continuing to strengthen my foundation in embedded systems and signal
              processing.
            </p>

            {/* Currently learning tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </FadeIn>
    </div>
  );
}
