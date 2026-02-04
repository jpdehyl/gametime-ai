"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Radio } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Results" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#2a2a3c]">
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#00f0ff]/20 to-[#ff4d4d]/20 border border-[#2a2a3c] flex items-center justify-center group-hover:border-[#00f0ff]/50 transition-colors">
              <span className="text-white font-bold text-sm">GT</span>
              {/* Live dot */}
              <motion.div
                className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#ff4d4d]"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white leading-none">
                GameTime<span className="text-[#00f0ff]">.ai</span>
              </span>
              <span className="text-[10px] text-white/40 uppercase tracking-wider">
                AI Sales Coach
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#39ff14]/10 border border-[#39ff14]/30">
              <Radio className="w-3 h-3 text-[#39ff14]" />
              <span className="text-xs font-medium text-[#39ff14]">500+ teams live</span>
            </div>
            <Button variant="secondary" size="sm">
              Get Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-[#2a2a3c]"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-white/60 hover:text-white transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <Radio className="w-3 h-3 text-[#39ff14]" />
                    <span className="text-xs font-medium text-[#39ff14]">500+ teams live</span>
                  </div>
                  <Button variant="secondary" size="sm" className="w-full">
                    Get Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
