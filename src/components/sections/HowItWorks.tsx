"use client";

import { motion } from "framer-motion";
import { Plug, Brain, Trophy } from "lucide-react";
import { Container } from "@/components/ui/Container";

const plays = [
  {
    number: "01",
    icon: Plug,
    title: "CONNECT",
    subtitle: "Plug in your stack",
    description: "5-minute integration with Salesforce, HubSpot, Zoom, or any dialer. We start analyzing calls immediately.",
    diagram: "connect",
  },
  {
    number: "02",
    icon: Brain,
    title: "LEARN",
    subtitle: "AI studies your winners",
    description: "Our AI watches your top performers and builds a custom playbook. What makes your best reps great becomes the standard.",
    diagram: "learn",
  },
  {
    number: "03",
    icon: Trophy,
    title: "WIN",
    subtitle: "Every rep becomes elite",
    description: "Real-time coaching on every call. Your whole team executes like your best closer. Watch the scoreboard climb.",
    diagram: "win",
  },
];

function PlayDiagram({ type, isActive }: { type: string; isActive: boolean }) {
  const baseClasses = "absolute transition-all duration-500";

  if (type === "connect") {
    return (
      <div className="relative w-full h-full">
        {/* Integration nodes */}
        <motion.div
          className={`${baseClasses} top-4 left-4 w-8 h-8 rounded-full border-2 border-[#00f0ff]/50 flex items-center justify-center text-xs font-mono text-[#00f0ff]/70`}
          animate={isActive ? { scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          CRM
        </motion.div>
        <motion.div
          className={`${baseClasses} top-4 right-4 w-8 h-8 rounded-full border-2 border-[#00f0ff]/50 flex items-center justify-center text-xs font-mono text-[#00f0ff]/70`}
          animate={isActive ? { scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        >
          VoIP
        </motion.div>
        <motion.div
          className={`${baseClasses} bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-[#00f0ff]/50 flex items-center justify-center text-xs font-mono text-[#00f0ff]/70`}
          animate={isActive ? { scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        >
          API
        </motion.div>
        {/* Center node - GameTime */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#00f0ff]/20 border-2 border-[#00f0ff] flex items-center justify-center">
          <span className="text-[#00f0ff] font-bold text-xs">GT</span>
        </div>
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <motion.line
            x1="28" y1="28" x2="50%" y2="50%"
            stroke="#00f0ff"
            strokeWidth="1"
            strokeDasharray="4 4"
            animate={isActive ? { strokeOpacity: [0.2, 0.6, 0.2] } : { strokeOpacity: 0.2 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.line
            x1="calc(100% - 28px)" y1="28" x2="50%" y2="50%"
            stroke="#00f0ff"
            strokeWidth="1"
            strokeDasharray="4 4"
            animate={isActive ? { strokeOpacity: [0.2, 0.6, 0.2] } : { strokeOpacity: 0.2 }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
          <motion.line
            x1="50%" y1="calc(100% - 28px)" x2="50%" y2="50%"
            stroke="#00f0ff"
            strokeWidth="1"
            strokeDasharray="4 4"
            animate={isActive ? { strokeOpacity: [0.2, 0.6, 0.2] } : { strokeOpacity: 0.2 }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          />
        </svg>
      </div>
    );
  }

  if (type === "learn") {
    return (
      <div className="relative w-full h-full">
        {/* Top performer icons (X's) */}
        <motion.div
          className={`${baseClasses} top-3 left-1/4 text-[#39ff14] font-bold text-lg`}
          animate={isActive ? { y: [0, -3, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          X
        </motion.div>
        <motion.div
          className={`${baseClasses} top-3 right-1/4 text-[#39ff14] font-bold text-lg`}
          animate={isActive ? { y: [0, -3, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        >
          X
        </motion.div>
        {/* AI brain in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-10 h-10 rounded-lg bg-[#ff4d4d]/20 border border-[#ff4d4d] flex items-center justify-center"
            animate={isActive ? { boxShadow: ["0 0 10px rgba(255,77,77,0.3)", "0 0 20px rgba(255,77,77,0.5)", "0 0 10px rgba(255,77,77,0.3)"] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Brain className="w-5 h-5 text-[#ff4d4d]" />
          </motion.div>
        </div>
        {/* Playbook output */}
        <motion.div
          className={`${baseClasses} bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-white/5 border border-white/20 text-[10px] font-mono text-white/60`}
          animate={isActive ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          PLAYBOOK.AI
        </motion.div>
        {/* Flow arrows */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#ff4d4d" opacity="0.6" />
            </marker>
          </defs>
          <motion.path
            d="M 40 24 Q 50 40 50 52"
            fill="none"
            stroke="#ff4d4d"
            strokeWidth="1"
            strokeDasharray="3 3"
            markerEnd="url(#arrowhead)"
            animate={isActive ? { strokeOpacity: [0.3, 0.7, 0.3] } : { strokeOpacity: 0.3 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.path
            d="M 90 24 Q 80 40 80 52"
            fill="none"
            stroke="#ff4d4d"
            strokeWidth="1"
            strokeDasharray="3 3"
            markerEnd="url(#arrowhead)"
            animate={isActive ? { strokeOpacity: [0.3, 0.7, 0.3] } : { strokeOpacity: 0.3 }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
        </svg>
      </div>
    );
  }

  if (type === "win") {
    return (
      <div className="relative w-full h-full">
        {/* Scoreboard display */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0d0d12] rounded border border-[#39ff14]/30">
          <motion.span
            className="font-mono text-[#39ff14] text-sm font-bold"
            animate={isActive ? { opacity: [1, 0.7, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            +40%
          </motion.span>
        </div>
        {/* Team of O's becoming X's */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold"
              animate={isActive ? {
                borderColor: ["rgba(255,255,255,0.3)", "#39ff14", "#39ff14"],
                color: ["rgba(255,255,255,0.3)", "#39ff14", "#39ff14"],
              } : { borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.3)" }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            >
              X
            </motion.div>
          ))}
        </div>
        {/* Trophy glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={isActive ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Trophy className="w-8 h-8 text-[#ffd700]" />
        </motion.div>
      </div>
    );
  }

  return null;
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Background field lines - like a sports field */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white" />
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white" />
      </div>

      <Container className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/60 mb-6">
            The Playbook
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Three plays. <span className="text-[#00f0ff]">Game over.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Get your team from kickoff to winning in under a week.
          </p>
        </motion.div>

        {/* Plays grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {plays.map((play, index) => (
            <motion.div
              key={play.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-[#12121a] rounded-xl border border-[#2a2a3c] p-6 hover:border-[#00f0ff]/30 transition-colors overflow-hidden">
                {/* Play number - big background */}
                <div className="absolute -top-4 -right-4 text-[120px] font-bold text-white/[0.02] leading-none pointer-events-none">
                  {play.number}
                </div>

                {/* Top row: number + icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#00f0ff] tracking-wider">
                    PLAY {play.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00f0ff]/30 group-hover:bg-[#00f0ff]/5 transition-colors">
                    <play.icon className="w-5 h-5 text-white/60 group-hover:text-[#00f0ff] transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                  {play.title}
                </h3>
                <p className="text-sm text-[#00f0ff]/70 font-medium mb-4">
                  {play.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-white/50 mb-6 leading-relaxed">
                  {play.description}
                </p>

                {/* Diagram area */}
                <div className="relative h-28 bg-[#0d0d12] rounded-lg border border-[#2a2a3c] overflow-hidden">
                  <PlayDiagram type={play.diagram} isActive={true} />
                </div>
              </div>

              {/* Connection arrow (between cards on desktop) */}
              {index < plays.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    className="w-8 h-8 rounded-full bg-[#16161f] border border-[#2a2a3c] flex items-center justify-center"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <span className="text-[#00f0ff] text-lg">→</span>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
