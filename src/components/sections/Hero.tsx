"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Radio, TrendingUp, Zap, Target, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// Simulated conversation for the play-by-play
const conversationFlow = [
  { speaker: "rep", text: "So you mentioned budget was a concern..." },
  { speaker: "prospect", text: "Yeah, we're looking at Q2 before we can commit." },
  { speaker: "ai", type: "coaching", text: "PIVOT: Ask about cost of inaction", icon: Zap },
  { speaker: "rep", text: "What happens if this problem isn't solved by Q2?" },
  { speaker: "prospect", text: "Honestly? We'd probably lose another 2-3 enterprise deals." },
  { speaker: "ai", type: "signal", text: "BUYING SIGNAL DETECTED", icon: Target },
  { speaker: "rep", text: "At your average deal size, that's roughly $400K at risk..." },
  { speaker: "ai", type: "success", text: "OBJECTION HANDLED +15 pts", icon: TrendingUp },
];

// Live stats that update
const liveStats = [
  { label: "CALL SCORE", value: 87, suffix: "", trend: "+12" },
  { label: "TALK RATIO", value: 42, suffix: "%", trend: "optimal" },
  { label: "ENGAGEMENT", value: 94, suffix: "%", trend: "+8" },
];

function LiveIndicator() {
  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-1.5 bg-[#ff3b3b] rounded text-xs font-bold uppercase tracking-wider"
      animate={{ opacity: [1, 0.7, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <Radio className="w-3 h-3" />
      LIVE
    </motion.div>
  );
}

function ConversationLine({ item, index }: { item: typeof conversationFlow[0], index: number }) {
  const isAI = item.speaker === "ai";
  const isRep = item.speaker === "rep";

  if (isAI) {
    const IconComponent = item.icon || AlertCircle;
    const bgColor = item.type === "success" ? "bg-[#39ff14]/20 border-[#39ff14]/50" :
                    item.type === "signal" ? "bg-[#00f0ff]/20 border-[#00f0ff]/50" :
                    "bg-[#ff4d4d]/20 border-[#ff4d4d]/50";
    const textColor = item.type === "success" ? "text-[#39ff14]" :
                      item.type === "signal" ? "text-[#00f0ff]" :
                      "text-[#ff4d4d]";

    return (
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className={`flex items-center gap-3 px-4 py-2 ${bgColor} border rounded-lg my-2`}
      >
        <IconComponent className={`w-4 h-4 ${textColor} flex-shrink-0`} />
        <span className={`text-sm font-mono font-semibold ${textColor}`}>
          {item.text}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`flex gap-3 my-2 ${isRep ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-[85%] ${isRep ? 'order-2' : ''}`}>
        <span className={`text-[10px] uppercase tracking-wider mb-1 block ${
          isRep ? 'text-[#00f0ff] text-right' : 'text-white/50'
        }`}>
          {isRep ? 'REP' : 'PROSPECT'}
        </span>
        <div className={`px-4 py-2 rounded-lg text-sm ${
          isRep
            ? 'bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-white'
            : 'bg-white/5 border border-white/10 text-white/80'
        }`}>
          {item.text}
        </div>
      </div>
    </motion.div>
  );
}

function PlayByPlayDisplay() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [callScore, setCallScore] = useState(72);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    conversationFlow.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
        if (conversationFlow[index].speaker === "ai") {
          setCallScore(prev => Math.min(99, prev + Math.floor(Math.random() * 8) + 3));
        }
      }, (index + 1) * 2000);
      timers.push(timer);
    });

    // Loop the animation
    const resetTimer = setTimeout(() => {
      setVisibleItems([]);
      setCallScore(72);
      setCycle(c => c + 1);
    }, (conversationFlow.length + 2) * 2000);
    timers.push(resetTimer);

    return () => timers.forEach(t => clearTimeout(t));
  }, [cycle]);

  return (
    <div className="relative w-full max-w-md">
      {/* Broadcast frame */}
      <div className="relative bg-[#0d0d12] rounded-lg border border-[#2a2a3c] overflow-hidden shadow-2xl">
        {/* Top bar with live indicator and score */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#16161f] to-[#1a1a2e] border-b border-[#2a2a3c]">
          <LiveIndicator />
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-[10px] text-white/50 uppercase tracking-wider">Call Score</div>
              <motion.div
                className="text-2xl font-bold text-[#39ff14] font-mono"
                key={callScore}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
              >
                {callScore}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Conversation area */}
        <div className="p-4 h-[320px] overflow-hidden bg-gradient-to-b from-transparent to-[#0d0d12]/80">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((itemIndex) => (
              <ConversationLine
                key={itemIndex}
                item={conversationFlow[itemIndex]}
                index={itemIndex}
              />
            ))}
          </AnimatePresence>

          {visibleItems.length === 0 && (
            <motion.div
              className="flex items-center justify-center h-full text-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-center">
                <Radio className="w-8 h-8 mx-auto mb-2 animate-pulse" />
                <span className="text-sm">Connecting to live call...</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom stats ticker */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#16161f] border-t border-[#2a2a3c]">
          {liveStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[9px] text-white/40 uppercase tracking-wider">{stat.label}</div>
              <div className="text-lg font-bold text-white font-mono">
                {stat.value}{stat.suffix}
                <span className="text-[10px] text-[#39ff14] ml-1">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#00f0ff]/20 via-transparent to-[#ff4d4d]/20 rounded-xl blur-xl -z-10 opacity-50" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 broadcast-grid">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00f0ff]/5 via-transparent to-transparent" />

      {/* Corner accent lines - broadcast style */}
      <div className="absolute top-20 left-0 w-32 h-[1px] bg-gradient-to-r from-[#00f0ff] to-transparent" />
      <div className="absolute top-20 left-0 w-[1px] h-32 bg-gradient-to-b from-[#00f0ff] to-transparent" />
      <div className="absolute top-20 right-0 w-32 h-[1px] bg-gradient-to-l from-[#ff4d4d] to-transparent" />
      <div className="absolute top-20 right-0 w-[1px] h-32 bg-gradient-to-b from-[#ff4d4d] to-transparent" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="px-3 py-1 rounded bg-[#ff4d4d]/20 border border-[#ff4d4d]/30 text-[#ff4d4d] text-xs font-bold uppercase tracking-wider">
                Now Live
              </span>
              <span className="text-white/50 text-sm">AI Sales Coaching</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              Your reps are
              <br />
              <span className="text-[#00f0ff]">never alone</span>
              <br />
              on a call again.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/60 max-w-lg mb-8"
            >
              GameTime.ai watches every sales call and whispers the perfect play
              in your rep&apos;s ear. Real-time coaching. Real results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button variant="secondary" size="lg" className="glow-secondary">
                Watch It Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#00f0ff]/50 text-[#00f0ff] hover:bg-[#00f0ff]/10"
              >
                Book a Demo
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-3xl font-bold text-white font-mono">40%</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">More Closes</div>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white font-mono">2.3x</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Faster Ramp</div>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white font-mono">500+</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Teams Live</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Live Play-by-Play Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <PlayByPlayDisplay />
          </motion.div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
