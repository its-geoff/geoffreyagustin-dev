import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/its-geoff",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/geoffrey-agustin",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:contact@geoffreyagustin.dev",
    icon: Mail,
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Built with Next.js and Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Geoffrey Agustin
          </p>
        </div>
      </div>
    </footer>
  );
}
