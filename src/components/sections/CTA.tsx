"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 broadcast-grid opacity-10" />

      {/* Accent glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#ff4d4d]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <Container size="narrow" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Main CTA card */}
          <div className="relative bg-gradient-to-br from-[#12121a] via-[#16161f] to-[#12121a] rounded-2xl border border-[#2a2a3c] overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-[#00f0ff] via-[#39ff14] to-[#ff4d4d]" />

            {/* Content */}
            <div className="p-8 sm:p-12 lg:p-16 text-center">
              {/* Urgency badge */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff4d4d]/20 border border-[#ff4d4d]/30 text-[#ff4d4d] text-sm font-bold mb-8"
              >
                <Zap className="w-4 h-4" />
                Limited spots for Q1 onboarding
              </motion.div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Stop watching from the
                <br />
                <span className="text-[#00f0ff]">sidelines.</span>
              </h2>

              <p className="text-lg text-white/60 max-w-lg mx-auto mb-10">
                Your competitors are already using AI to coach their teams.
                Every day you wait is another deal they close.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Button variant="secondary" size="lg" className="glow-secondary px-8">
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Your Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  Talk to Sales
                </Button>
              </div>

              {/* Quick info */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15-min demo</span>
                </div>
                <span className="hidden sm:block">•</span>
                <span>No credit card required</span>
                <span className="hidden sm:block">•</span>
                <span>See results in 30 days</span>
              </div>
            </div>

            {/* Bottom stats bar */}
            <div className="px-8 py-6 bg-[#0d0d12] border-t border-[#2a2a3c]">
              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
                <div className="text-center">
                  <div className="text-xl font-bold text-white font-mono">500+</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">Teams Live</div>
                </div>
                <div className="w-[1px] h-8 bg-[#2a2a3c] hidden sm:block" />
                <div className="text-center">
                  <div className="text-xl font-bold text-[#39ff14] font-mono">40%</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">Avg. Lift</div>
                </div>
                <div className="w-[1px] h-8 bg-[#2a2a3c] hidden sm:block" />
                <div className="text-center">
                  <div className="text-xl font-bold text-white font-mono">90 Days</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">To ROI</div>
                </div>
                <div className="w-[1px] h-8 bg-[#2a2a3c] hidden sm:block" />
                <div className="text-center">
                  <div className="text-xl font-bold text-[#00f0ff] font-mono">24/7</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">Support</div>
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-1 left-0 w-16 h-[1px] bg-gradient-to-r from-[#00f0ff] to-transparent" />
            <div className="absolute top-1 left-0 w-[1px] h-16 bg-gradient-to-b from-[#00f0ff] to-transparent" />
            <div className="absolute top-1 right-0 w-16 h-[1px] bg-gradient-to-l from-[#ff4d4d] to-transparent" />
            <div className="absolute top-1 right-0 w-[1px] h-16 bg-gradient-to-b from-[#ff4d4d] to-transparent" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
