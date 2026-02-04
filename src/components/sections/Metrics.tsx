"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(value, increment * step);
      setDisplayValue(current);

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  const formattedValue = Number.isInteger(value)
    ? Math.round(displayValue)
    : displayValue.toFixed(1);

  return (
    <span className="font-black">
      {formattedValue}{suffix}
    </span>
  );
}

export function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="border-b-[6px] border-black" ref={containerRef}>
      {/* Section header */}
      <div className="grid grid-cols-12 border-b-[6px] border-black">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-3 bg-[#FF0000] p-8 lg:p-12 border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black"
        >
          <span className="text-white/60 text-xs uppercase tracking-widest">The Results</span>
          <h2 className="mondrian-heading text-4xl lg:text-5xl text-white mt-2">
            Proven Impact
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-9 bg-white p-8 lg:p-12 flex items-center"
        >
          <p className="text-xl lg:text-2xl text-black/70 max-w-3xl font-medium">
            Numbers don&apos;t lie. Here&apos;s what happens when you put an AI coach on every call.
          </p>
        </motion.div>
      </div>

      {/* Metrics grid - Mondrian asymmetric layout */}
      <div className="grid grid-cols-12 grid-rows-2 min-h-[500px]">
        {/* Large red block - 40% More Closes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-6 row-span-2 bg-[#FF0000] border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black p-8 lg:p-12 flex flex-col justify-between mondrian-cell"
        >
          <div>
            <span className="text-white/60 text-xs uppercase tracking-widest">Close Rate Increase</span>
          </div>
          <div>
            <div className="text-white text-7xl lg:text-9xl">
              <AnimatedNumber value={40} suffix="%" inView={isInView} />
            </div>
            <div className="text-white text-2xl lg:text-3xl font-bold mt-4">More Closes</div>
            <p className="text-white/60 text-lg mt-4 max-w-md">
              Average improvement in win rates within 90 days of deployment.
            </p>
          </div>
        </motion.div>

        {/* Blue block - 65% Faster Ramp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-12 sm:col-span-6 lg:col-span-3 bg-[#0000FF] border-b-[6px] lg:border-r-[6px] border-black p-6 lg:p-8 flex flex-col justify-between mondrian-cell"
        >
          <span className="text-white/60 text-xs uppercase tracking-widest">Ramp Time</span>
          <div>
            <div className="text-white text-5xl lg:text-6xl">
              <AnimatedNumber value={65} suffix="%" inView={isInView} />
            </div>
            <div className="text-white text-lg font-bold mt-2">Faster Ramp</div>
          </div>
        </motion.div>

        {/* Yellow block - 3.2x ROI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-12 sm:col-span-6 lg:col-span-3 bg-[#FFDE00] border-b-[6px] lg:border-b-0 border-black p-6 lg:p-8 flex flex-col justify-between mondrian-cell"
        >
          <span className="text-black/60 text-xs uppercase tracking-widest">Year One</span>
          <div>
            <div className="text-black text-5xl lg:text-6xl">
              <AnimatedNumber value={3.2} suffix="x" inView={isInView} />
            </div>
            <div className="text-black text-lg font-bold mt-2">ROI</div>
          </div>
        </motion.div>

        {/* White block - 50% Less Manager Time */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white border-b-[6px] sm:border-b-0 sm:border-r-[6px] lg:border-r-[6px] border-black p-6 lg:p-8 flex flex-col justify-between mondrian-cell"
        >
          <span className="text-black/60 text-xs uppercase tracking-widest">Manager Time Saved</span>
          <div>
            <div className="text-black text-5xl lg:text-6xl">
              <AnimatedNumber value={50} suffix="%" inView={isInView} />
            </div>
            <div className="text-black text-lg font-bold mt-2">Less Reviews</div>
          </div>
        </motion.div>

        {/* Black block - social proof */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="col-span-12 sm:col-span-6 lg:col-span-3 bg-black p-6 lg:p-8 flex flex-col justify-center mondrian-cell"
        >
          <div className="text-white/50 text-xs uppercase tracking-widest mb-2">Verified Results</div>
          <div className="text-white text-3xl font-black">500+</div>
          <div className="text-white/70 text-sm">Enterprise Teams</div>
          <div className="text-white/70 text-sm">90-Day Average</div>
        </motion.div>
      </div>
    </section>
  );
}
