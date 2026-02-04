"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";

const metrics = [
  {
    value: 40,
    suffix: "%",
    label: "CLOSE RATE",
    sublabel: "INCREASE",
    icon: TrendingUp,
    color: "#39ff14",
  },
  {
    value: 65,
    suffix: "%",
    label: "FASTER",
    sublabel: "RAMP TIME",
    icon: Clock,
    color: "#00f0ff",
  },
  {
    value: 3.2,
    suffix: "x",
    label: "ROI",
    sublabel: "YEAR ONE",
    icon: DollarSign,
    color: "#ffd700",
  },
  {
    value: 50,
    suffix: "%",
    label: "LESS",
    sublabel: "MANAGER TIME",
    icon: Users,
    color: "#ff4d4d",
  },
];

function AnimatedNumber({ value, suffix, color, inView }: { value: number; suffix: string; color: string; inView: boolean }) {
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
    <motion.span
      className="font-mono font-bold tracking-tight"
      style={{ color }}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
    >
      {formattedValue}{suffix}
    </motion.span>
  );
}

function ScoreboardCard({ metric, index, inView }: { metric: typeof metrics[0]; index: number; inView: boolean }) {
  const IconComponent = metric.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Scoreboard panel */}
      <div className="relative bg-[#0d0d12] rounded-lg border border-[#2a2a3c] overflow-hidden">
        {/* Top LED bar */}
        <div
          className="h-1 w-full"
          style={{ backgroundColor: metric.color, opacity: 0.8 }}
        />

        {/* Content */}
        <div className="p-6 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${metric.color}20`, border: `1px solid ${metric.color}40` }}
            >
              <IconComponent className="w-5 h-5" style={{ color: metric.color }} />
            </div>
          </div>

          {/* Big number */}
          <div className="text-5xl sm:text-6xl lg:text-7xl mb-2">
            <AnimatedNumber
              value={metric.value}
              suffix={metric.suffix}
              color={metric.color}
              inView={inView}
            />
          </div>

          {/* Labels */}
          <div className="space-y-0.5">
            <div className="text-sm font-bold text-white tracking-wider">
              {metric.label}
            </div>
            <div className="text-xs text-white/40 tracking-widest uppercase">
              {metric.sublabel}
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-8 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

        {/* Corner accents */}
        <div
          className="absolute top-0 left-0 w-4 h-4 border-t border-l"
          style={{ borderColor: metric.color, opacity: 0.3 }}
        />
        <div
          className="absolute top-0 right-0 w-4 h-4 border-t border-r"
          style={{ borderColor: metric.color, opacity: 0.3 }}
        />
        <div
          className="absolute bottom-0 left-0 w-4 h-4 border-b border-l"
          style={{ borderColor: metric.color, opacity: 0.3 }}
        />
        <div
          className="absolute bottom-0 right-0 w-4 h-4 border-b border-r"
          style={{ borderColor: metric.color, opacity: 0.3 }}
        />
      </div>

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
        style={{ backgroundColor: metric.color, opacity: 0.1 }}
      />
    </motion.div>
  );
}

export function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden" ref={containerRef}>
      {/* Background grid effect */}
      <div className="absolute inset-0 broadcast-grid opacity-30" />

      {/* Horizontal scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent"
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <Container className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Scoreboard-style header */}
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-[#12121a] rounded-lg border border-[#2a2a3c]">
              <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                Live Results
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The <span className="text-[#00f0ff]">scoreboard</span> doesn&apos;t lie.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Average results from 500+ sales teams using GameTime.ai
          </p>
        </motion.div>

        {/* Scoreboard grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <ScoreboardCard
              key={metric.label}
              metric={metric}
              index={index}
              inView={isInView}
            />
          ))}
        </div>

        {/* Bottom ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-[#12121a] rounded-lg border border-[#2a2a3c]">
            <span className="text-xs text-white/40 uppercase tracking-wider">Verified by</span>
            <span className="text-sm font-semibold text-white">500+ Enterprise Teams</span>
            <span className="w-[1px] h-4 bg-white/20" />
            <span className="text-sm font-semibold text-white">90-Day Results</span>
            <span className="w-[1px] h-4 bg-white/20" />
            <span className="text-sm font-semibold text-[#39ff14]">Guaranteed</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
