"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Play, Radio } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

function LiveIndicator() {
  const [pulse, setPulse] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => setPulse(p => !p), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2" role="status" aria-live="polite">
      <div className={`w-2 h-2 rounded-full bg-[#00FF00] ${pulse ? 'opacity-100' : 'opacity-50'} transition-opacity`} aria-hidden="true" />
      <span className="text-xs font-bold uppercase tracking-wider">Live</span>
      <span className="sr-only">System is currently active</span>
    </div>
  );
}

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
}

export function Hero() {
  return (
    <section className="min-h-screen pt-20 border-b-[6px] border-black">
      <div className="min-h-[calc(100vh-80px)] grid grid-cols-12 lg:grid-rows-6">
        
        {/* Main headline - Large white block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 lg:col-span-7 lg:row-span-5 bg-white border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black p-8 lg:p-12 xl:p-16 flex flex-col justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-black text-white">
              <Zap className="w-3 h-3" />
              <span className="text-xs font-bold uppercase tracking-wider">AI-Powered</span>
            </div>
            <div className="px-3 py-1.5 border-[3px] border-black">
              <LiveIndicator />
            </div>
          </motion.div>

          <h1 className="mondrian-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-black mb-8 leading-[0.85]">
            The AI Layer
            <br />
            <span className="text-black/40">That Makes</span>
            <br />
            <span className="text-[#0000FF]">Your Team</span>
            <br />
            Work Better
          </h1>

          <p className="text-lg lg:text-xl text-black/60 max-w-xl mb-10 font-medium leading-relaxed">
            Real-time coaching on every sales call. Your reps execute like your best closer. Every time.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="red" size="lg" className="group">
              Get a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="white" size="lg" className="group">
              <Play className="mr-2 w-4 h-4" />
              Watch It Work
            </Button>
          </div>
        </motion.div>

        {/* Right side - Bento grid */}
        <div className="col-span-12 lg:col-span-5 lg:row-span-5 grid grid-cols-2 grid-rows-4">
          
          {/* Blue metric block - Close Rate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="col-span-2 row-span-2 bg-[#0000FF] border-b-[6px] border-black p-6 lg:p-8 flex flex-col justify-between mondrian-cell cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-xs uppercase tracking-widest">Close Rate</span>
              <div className="w-8 h-8 border-2 border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <Radio className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </div>
            </div>
            <div>
              <div className="text-white text-6xl lg:text-7xl font-black group-hover:scale-105 transition-transform origin-left">+40%</div>
              <div className="text-white/60 text-sm mt-2 font-medium">Average improvement in 90 days</div>
            </div>
          </motion.div>

          {/* Yellow metric block - Ramp Time */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="col-span-1 row-span-1 bg-[#FFDE00] border-b-[6px] border-r-[6px] border-black p-4 lg:p-6 flex flex-col justify-between mondrian-cell cursor-pointer group"
          >
            <span className="text-black/60 text-[10px] uppercase tracking-widest">Ramp Time</span>
            <div>
              <div className="text-black text-3xl lg:text-4xl font-black group-hover:scale-105 transition-transform origin-left">65%</div>
              <div className="text-black/60 text-xs mt-1">Faster</div>
            </div>
          </motion.div>

          {/* Red metric block - ROI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="col-span-1 row-span-1 bg-[#FF0000] border-b-[6px] border-black p-4 lg:p-6 flex flex-col justify-between mondrian-cell cursor-pointer group"
          >
            <span className="text-white/60 text-[10px] uppercase tracking-widest">Year One</span>
            <div>
              <div className="text-white text-3xl lg:text-4xl font-black group-hover:scale-105 transition-transform origin-left">3.2x</div>
              <div className="text-white/60 text-xs mt-1">ROI</div>
            </div>
          </motion.div>

          {/* Black block - 24/7 Coaching */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="col-span-1 row-span-1 bg-black border-r-[6px] border-black p-4 lg:p-6 flex flex-col justify-center mondrian-cell cursor-pointer group"
          >
            <div className="text-white text-4xl lg:text-5xl font-black group-hover:scale-105 transition-transform">24/7</div>
            <div className="text-white/50 text-xs uppercase tracking-widest mt-2">AI Coaching</div>
          </motion.div>

          {/* White quote block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="col-span-1 row-span-1 bg-white border-l-[6px] border-black p-4 lg:p-6 flex flex-col justify-center mondrian-cell cursor-pointer"
          >
            <div className="text-2xl font-black text-black leading-none mb-2">&ldquo;</div>
            <p className="text-xs font-bold text-black/80 leading-snug">
              Like having your best sales manager on every call.
            </p>
            <p className="text-[10px] text-black/50 mt-2 uppercase tracking-wider">
              VP Sales, TechFlow
            </p>
          </motion.div>
        </div>

        {/* Bottom row - Full width social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="col-span-12 lg:row-span-1 grid grid-cols-12 border-t-[6px] border-black"
        >
          {/* Trusted by block */}
          <div className="col-span-6 sm:col-span-3 bg-black p-4 lg:p-6 border-r-[6px] border-black flex items-center gap-3">
            <div className="text-white text-3xl lg:text-4xl font-black">500+</div>
            <div className="text-white/50 text-[10px] lg:text-xs uppercase tracking-wider leading-tight">Enterprise<br/>Teams</div>
          </div>

          {/* Status indicator block */}
          <div className="col-span-6 sm:col-span-3 bg-[#FFDE00] p-4 lg:p-6 border-r-[6px] border-black flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-black" />
                <div className="w-2 h-2 bg-black" />
                <div className="w-2 h-2 bg-black" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-black">System Active</span>
            </div>
          </div>

          {/* Integration logos placeholder */}
          <div className="col-span-12 sm:col-span-6 bg-white p-4 lg:p-6 flex items-center justify-center gap-6">
            <span className="text-black/40 text-xs uppercase tracking-widest">Integrates with</span>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 bg-black/5 text-black/60 text-xs font-bold">Salesforce</div>
              <div className="px-3 py-1 bg-black/5 text-black/60 text-xs font-bold">HubSpot</div>
              <div className="hidden md:block px-3 py-1 bg-black/5 text-black/60 text-xs font-bold">Zoom</div>
              <div className="hidden lg:block px-3 py-1 bg-black/5 text-black/60 text-xs font-bold">+50 more</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
