"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-16 lg:pt-18 section-padding bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full"
            >
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
              </div>
              <span className="text-sm text-muted-foreground">A product by GroundGame</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="heading-xl"
            >
              The AI Layer That Makes Sales Teams{" "}
              <span className="accent-blue">Unstoppable</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-subtle leading-relaxed max-w-xl"
            >
              From pre-call research to post-call coaching — GameTime gives every rep an AI copilot that knows your playbook, preps your calls, and coaches in real-time.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="group">
                Request Access
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => scrollToSection('platform')}
                className="group"
              >
                See the Platform
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="card-hover bg-card p-4 rounded-xl border border-border shadow-2xl">
              <Image
                src="/screenshots/dashboard-callqueue.jpg"
                alt="GameTime.ai Smart Call Queue with AI-prioritized leads and fit scores"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-red/5 rounded-xl -z-10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
