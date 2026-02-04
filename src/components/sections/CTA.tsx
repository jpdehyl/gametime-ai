"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="border-b-[6px] border-black">
      <div className="grid grid-cols-12 min-h-[500px]">
        {/* Large CTA block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 bg-[#FF0000] p-8 lg:p-16 flex flex-col justify-center border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-xs uppercase tracking-widest mb-4"
          >
            Ready to Transform Your Sales?
          </motion.span>

          <h2 className="mondrian-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-8">
            Stop Leaving
            <br />
            Money On
            <br />
            The Table
          </h2>

          <p className="text-xl text-white/70 max-w-xl mb-10">
            Join 500+ sales teams using GameTime.ai to close more deals. Get started in under 5 minutes.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="black" size="lg">
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="white" size="lg">
              Talk to Sales
            </Button>
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
            className="bg-[#FFDE00] p-6 lg:p-8 border-b-[6px] border-black flex flex-col justify-center mondrian-cell"
          >
            <div className="text-black/60 text-xs uppercase tracking-widest mb-2">Setup Time</div>
            <div className="text-black text-4xl font-black">5 min</div>
            <div className="text-black/60 text-sm mt-1">No complex integrations</div>
          </motion.div>

          {/* Blue block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0000FF] p-6 lg:p-8 border-b-[6px] border-black flex flex-col justify-center mondrian-cell"
          >
            <div className="text-white/60 text-xs uppercase tracking-widest mb-2">Free Trial</div>
            <div className="text-white text-4xl font-black">14 Days</div>
            <div className="text-white/60 text-sm mt-1">No credit card required</div>
          </motion.div>

          {/* Black block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-black p-6 lg:p-8 flex flex-col justify-center mondrian-cell"
          >
            <div className="text-white/50 text-xs uppercase tracking-widest mb-2">Results Guaranteed</div>
            <div className="text-white text-4xl font-black">90 Day</div>
            <div className="text-white/50 text-sm mt-1">Money-back promise</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
