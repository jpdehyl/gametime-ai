"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b-[6px] border-black transition-shadow ${scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.1)]' : ''}`}>
      <div className="max-w-[1600px] mx-auto">
        <nav className="flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-0.5">
              <motion.div 
                className="w-4 h-4 bg-[#FF0000]" 
                whileHover={{ scale: 1.1 }}
              />
              <motion.div 
                className="w-4 h-4 bg-[#FFDE00]" 
                whileHover={{ scale: 1.1 }}
              />
              <motion.div 
                className="w-4 h-4 bg-[#0000FF]" 
                whileHover={{ scale: 1.1 }}
              />
            </div>
            <span className="font-black text-xl text-black uppercase tracking-tight">
              GameTime<span className="text-[#0000FF]">.ai</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black/60 hover:text-black transition-colors text-sm font-bold uppercase tracking-wider relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0000FF] group-hover:w-full transition-all" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 border-[2px] border-black/10">
              <Zap className="w-3 h-3 text-black/40" />
              <span className="text-xs font-bold uppercase tracking-wider text-black/50">
                500+ Teams
              </span>
            </div>
            <Button variant="red" size="sm">
              Get Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center border-[3px] border-black text-black hover:bg-black hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t-[6px] border-black"
            >
              <div className="py-6 px-4 space-y-4 bg-white">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-black font-bold uppercase tracking-wider py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button variant="red" size="lg" className="w-full">
                    Get Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
