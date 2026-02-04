"use client";

import { motion } from "framer-motion";
import { Mic, TrendingUp, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    quote: "We went from 18% close rate to 26% in 90 days. That's not incremental improvement—that's a different team.",
    author: "Sarah Chen",
    role: "VP of Sales Operations",
    company: "TechFlow Solutions",
    stat: "+44%",
    statLabel: "Close Rate",
    avatar: "SC",
  },
  {
    quote: "The real-time coaching changed everything. My reps stopped asking me 'what should I have said?' because they already know.",
    author: "Marcus Johnson",
    role: "Director of Sales",
    company: "Velocity Partners",
    stat: "2.1x",
    statLabel: "Faster Ramp",
    avatar: "MJ",
  },
  {
    quote: "I've bought a lot of sales tools. This is the first one my team actually uses without me forcing them to.",
    author: "Emily Rodriguez",
    role: "Chief Revenue Officer",
    company: "Nexus Enterprise",
    stat: "94%",
    statLabel: "Adoption",
    avatar: "ER",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Card */}
      <div className="relative bg-[#12121a] rounded-xl border border-[#2a2a3c] overflow-hidden hover:border-[#00f0ff]/30 transition-colors">
        {/* Top bar with interview indicator */}
        <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-[#16161f] to-[#1a1a2e] border-b border-[#2a2a3c]">
          <div className="flex items-center gap-2">
            <Mic className="w-3 h-3 text-[#ff4d4d]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">
              Post-Game Interview
            </span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-3 h-3 text-[#39ff14]" />
            <span className="text-xs font-mono font-bold text-[#39ff14]">
              {testimonial.stat}
            </span>
            <span className="text-[10px] text-white/40 uppercase">
              {testimonial.statLabel}
            </span>
          </div>
        </div>

        {/* Quote content */}
        <div className="p-6">
          {/* Quote marks */}
          <div className="text-4xl text-[#00f0ff]/20 font-serif leading-none mb-2">&ldquo;</div>

          {/* Quote text */}
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            {testimonial.quote}
          </p>

          {/* Author info - like a sports graphic */}
          <div className="flex items-center gap-4">
            {/* Avatar with accent border */}
            <div className="relative">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00f0ff]/20 to-[#ff4d4d]/20 flex items-center justify-center text-white font-bold text-lg border border-[#2a2a3c]">
                {testimonial.avatar}
              </div>
              {/* Verified badge */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#39ff14] flex items-center justify-center">
                <Award className="w-3 h-3 text-[#0a0a0f]" />
              </div>
            </div>

            {/* Name plate - styled like sports graphics */}
            <div className="flex-1">
              <div className="relative inline-block">
                <div className="text-white font-bold text-lg">
                  {testimonial.author}
                </div>
                {/* Underline accent */}
                <div className="absolute -bottom-0.5 left-0 w-8 h-0.5 bg-[#00f0ff]" />
              </div>
              <div className="text-sm text-white/50 mt-1">
                {testimonial.role}
              </div>
              <div className="text-xs text-[#00f0ff]/70 font-medium">
                {testimonial.company}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#00f0ff] via-[#39ff14] to-[#ff4d4d] opacity-50" />
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Background broadcast grid */}
      <div className="absolute inset-0 broadcast-grid opacity-20" />

      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2a2a3c] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2a2a3c] to-transparent" />

      <Container className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#12121a] rounded-lg border border-[#2a2a3c]">
              <Mic className="w-4 h-4 text-[#ff4d4d]" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                From The Field
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hear it from the <span className="text-[#00f0ff]">winners</span>.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Sales leaders share their GameTime.ai results. No scripts, no BS.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-8 px-8 py-4 bg-[#12121a] rounded-xl border border-[#2a2a3c]">
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-mono">4.9/5</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">G2 Rating</div>
            </div>
            <div className="w-[1px] h-10 bg-[#2a2a3c]" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-mono">500+</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Reviews</div>
            </div>
            <div className="w-[1px] h-10 bg-[#2a2a3c]" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[#39ff14] font-mono">#1</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Sales AI</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
