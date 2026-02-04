"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";

const footerLinks = {
  product: [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Integrations" },
  ],
  company: [
    { href: "#", label: "About" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Contact" },
  ],
  resources: [
    { href: "#", label: "Documentation" },
    { href: "#", label: "Help Center" },
    { href: "#", label: "Case Studies" },
    { href: "#", label: "API" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black">
      {/* Main footer content */}
      <div className="grid grid-cols-12">
        {/* Brand block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4 bg-[#0000FF] p-8 lg:p-12 border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black"
        >
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <div className="flex items-center gap-0.5">
              <div className="w-3 h-3 bg-[#FF0000] group-hover:scale-110 transition-transform" />
              <div className="w-3 h-3 bg-[#FFDE00] group-hover:scale-110 transition-transform" />
              <div className="w-3 h-3 bg-white group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-black text-lg text-white uppercase tracking-tight">
              GameTime.ai
            </span>
          </Link>
          <p className="text-white/60 text-sm mb-8 max-w-[280px] leading-relaxed">
            Real-time AI coaching for sales teams that want to win. Close more deals, faster.
          </p>
          <div className="flex items-center gap-2 px-3 py-2 bg-white/10 inline-flex">
            <Zap className="w-3 h-3 text-white/60" />
            <span className="text-white/80 text-xs font-bold uppercase tracking-wider">
              A product by GroundGame
            </span>
          </div>
        </motion.div>

        {/* Links grid */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-3">
          {/* Product Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 lg:p-8 border-b-[6px] lg:border-b-0 border-r-[6px] border-black"
          >
            <h4 className="font-black mb-6 text-black text-xs uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 bg-[#0000FF]" />
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-black/50 hover:text-black transition-colors text-sm font-medium flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#FFDE00] p-6 lg:p-8 border-b-[6px] lg:border-b-0 border-r-[6px] border-black"
          >
            <h4 className="font-black mb-6 text-black text-xs uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 bg-black" />
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-black/50 hover:text-black transition-colors text-sm font-medium flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#FF0000] p-6 lg:p-8 border-b-[6px] lg:border-b-0 border-black"
          >
            <h4 className="font-black mb-6 text-white text-xs uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 bg-white" />
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="grid grid-cols-12 border-t-[6px] border-black">
        <div className="col-span-12 lg:col-span-6 bg-black p-6 lg:p-8 border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-white/10">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#FF0000]" />
              <div className="w-2 h-2 bg-[#FFDE00]" />
              <div className="w-2 h-2 bg-[#0000FF]" />
            </div>
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} GroundGame. All rights reserved.
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 bg-black p-6 lg:p-8 flex items-center justify-start lg:justify-end gap-6">
          <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
            Privacy
          </Link>
          <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
            Terms
          </Link>
          <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
}
