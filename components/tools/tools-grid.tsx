"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { SpotlightCard, TiltCard } from "@/components/interactive";

const toolCategories = [
  {
    name: "Languages",
    tools: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        level: 90,
      },
      {
        name: "C/C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        level: 85,
      },
      {
        name: "MATLAB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
        level: 70,
      },
      {
        name: "SystemVerilog",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        level: 65,
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        level: 60,
      },
    ],
  },
  {
    name: "Frameworks & Libraries",
    tools: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: 50,
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        level: 45,
      },
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        level: 75,
      },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        level: 70,
      },
    ],
  },
  {
    name: "Tools & Platforms",
    tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        level: 85,
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        level: 90,
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        level: 95,
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        level: 70,
      },
    ],
  },
  {
    name: "Hardware & Embedded",
    tools: [
      {
        name: "Arduino",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
        level: 75,
      },
      {
        name: "Raspberry Pi",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
        level: 70,
      },
    ],
  },
];

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
                          className="w-14 h-14 mx-auto mb-4 flex items-center justify-center"
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
                        <h4 className="text-sm font-medium text-foreground mb-3">
                          {tool.name}
                        </h4>

                        {/* Progress bar */}
                        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tool.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          {tool.level}% proficiency
                        </p>
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
