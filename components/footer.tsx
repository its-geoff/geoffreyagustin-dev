"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { MagneticButton } from "@/components/interactive";

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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/tools", label: "Tools" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">GA</span>
              </div>
              <span className="font-semibold text-foreground">Geoffrey Agustin</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Computer engineering student passionate about building elegant solutions
              at the intersection of hardware and software.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <MagneticButton key={link.label} strength={0.3}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </Link>
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-sm text-muted-foreground flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" />
            </motion.span>
            using Next.js & Tailwind CSS
          </motion.p>

          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Geoffrey Agustin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
