"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="min-h-screen pt-20 border-b-[6px] border-black">
      {/* Mondrian Grid Layout */}
      <div className="h-[calc(100vh-80px)] grid grid-cols-12 grid-rows-6">
        {/* Main headline - Large white block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 lg:col-span-8 row-span-4 bg-white border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black p-8 lg:p-12 flex flex-col justify-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mondrian-subheading text-black/60 mb-4"
          >
            AI-Powered Sales Coaching
          </motion.span>

          <h1 className="mondrian-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-black mb-8">
            The AI Layer
            <br />
            That Makes
            <br />
            <span className="text-[#0000FF]">Your Team</span>
            <br />
            Work Better
          </h1>

          <p className="text-lg lg:text-xl text-black/70 max-w-xl mb-10 font-medium">
            Real-time coaching on every sales call. Your reps execute like your best closer. Every time.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="red" size="lg">
              Get a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="white" size="lg">
              Watch It Work
            </Button>
          </div>
        </motion.div>

        {/* Right side color blocks */}
        <div className="hidden lg:grid col-span-4 row-span-4 grid-rows-4">
          {/* Blue block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="row-span-2 bg-[#0000FF] border-b-[6px] border-black p-8 flex items-end mondrian-cell"
          >
            <div>
              <div className="text-white/60 text-xs uppercase tracking-widest mb-1">Close Rate</div>
              <div className="text-white text-5xl font-black">+40%</div>
            </div>
          </motion.div>

          {/* Yellow block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="row-span-1 bg-[#FFDE00] border-b-[6px] border-black p-6 flex items-center mondrian-cell"
          >
            <div>
              <div className="text-black/60 text-xs uppercase tracking-widest mb-1">Ramp Time</div>
              <div className="text-black text-3xl font-black">65% Faster</div>
            </div>
          </motion.div>

          {/* Red block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="row-span-1 bg-[#FF0000] p-6 flex items-center mondrian-cell"
          >
            <div>
              <div className="text-white/60 text-xs uppercase tracking-widest mb-1">Year One</div>
              <div className="text-white text-3xl font-black">3.2x ROI</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="col-span-12 lg:col-span-3 row-span-2 bg-black p-6 lg:p-8 flex flex-col justify-center border-t-[6px] lg:border-t-0 lg:border-r-[6px] border-black"
        >
          <div className="text-white/50 text-xs uppercase tracking-widest mb-2">Trusted By</div>
          <div className="text-white text-4xl lg:text-5xl font-black">500+</div>
          <div className="text-white/70 text-sm mt-1">Enterprise Teams</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden lg:flex col-span-6 row-span-2 bg-white border-r-[6px] border-black p-8 items-center justify-center"
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-black max-w-md">
              &ldquo;Like having your best sales manager on every call.&rdquo;
            </p>
            <p className="text-black/50 text-sm mt-4 uppercase tracking-wider">
              VP of Sales, TechFlow Solutions
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="hidden lg:flex col-span-3 row-span-2 bg-[#FFDE00] p-8 items-center justify-center mondrian-cell"
        >
          <div className="text-center">
            <div className="text-black text-5xl font-black">24/7</div>
            <div className="text-black/60 text-xs uppercase tracking-widest mt-2">AI Coaching</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
