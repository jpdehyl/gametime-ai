"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="border-b-[6px] border-black">
      <div className="grid grid-cols-12 min-h-[500px] lg:min-h-[600px]">
        {/* Large CTA block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 bg-[#FF0000] p-8 lg:p-16 flex flex-col justify-center border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-black text-white">
              <Zap className="w-3 h-3" />
              <span className="text-xs font-bold uppercase tracking-wider">Ready to Win?</span>
            </div>
            <div className="px-3 py-1.5 border-[3px] border-white/30">
              <span className="text-white text-xs font-bold uppercase tracking-wider">Limited Beta</span>
            </div>
          </motion.div>

          <h2 className="mondrian-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 leading-[0.85]">
            Stop Leaving
            <br />
            <span className="text-white/50">Money On</span>
            <br />
            The Table
          </h2>

          <p className="text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
            Join 500+ sales teams using GameTime.ai to close more deals. Get started in under 5 minutes. See results in 90 days or your money back.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="black" size="lg" className="group">
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="white" size="lg">
              Talk to Sales
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2 text-white/60">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">5 min setup</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <span className="text-sm font-medium">No credit card required</span>
            </div>
          </div>
        </motion.div>

        {/* Right side blocks */}
        <div className="col-span-12 lg:col-span-4 grid grid-rows-3">
          {/* Yellow block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#FFDE00] p-6 lg:p-8 border-b-[6px] border-black flex flex-col justify-center mondrian-cell cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-black/60 text-xs uppercase tracking-widest">Setup Time</span>
              <Zap className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
            </div>
            <div className="text-black text-4xl lg:text-5xl font-black group-hover:scale-105 transition-transform origin-left">5 min</div>
            <div className="text-black/60 text-sm mt-2">No complex integrations. No IT required.</div>
          </motion.div>

          {/* Blue block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0000FF] p-6 lg:p-8 border-b-[6px] border-black flex flex-col justify-center mondrian-cell cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60 text-xs uppercase tracking-widest">Free Trial</span>
              <Clock className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
            </div>
            <div className="text-white text-4xl lg:text-5xl font-black group-hover:scale-105 transition-transform origin-left">14 Days</div>
            <div className="text-white/60 text-sm mt-2">Full access. No credit card needed.</div>
          </motion.div>

          {/* Black block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-black p-6 lg:p-8 flex flex-col justify-center mondrian-cell cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/50 text-xs uppercase tracking-widest">Guarantee</span>
              <Shield className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
            </div>
            <div className="text-white text-4xl lg:text-5xl font-black group-hover:scale-105 transition-transform origin-left">90 Day</div>
            <div className="text-white/50 text-sm mt-2">Results or your money back. Simple.</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
