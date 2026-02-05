"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-accent-red"></div>
              <div className="w-3 h-3 bg-accent-yellow"></div>
              <div className="w-3 h-3 bg-accent-blue"></div>
            </div>
            <span className="text-muted-foreground text-sm">GroundGame branding</span>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 md:gap-8">
            <Link 
              href="#platform" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Platform
            </Link>
            <Link 
              href="#features" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Features
            </Link>
            <Link 
              href="#about" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              About
            </Link>
            <Link 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Privacy
            </Link>
            <Link 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Terms
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} GroundGame. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
