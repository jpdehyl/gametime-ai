"use client";

import { motion } from "framer-motion";
import { Plug, Brain, TrendingUp, ChevronRight } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect",
    subtitle: "Your Tools",
    description: "5-minute integration with Salesforce, HubSpot, Zoom, or any dialer. No IT required.",
    detail: "Our plug-and-play connectors work with 50+ sales tools. Just authenticate and you're live.",
    color: "blue",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Learns",
    subtitle: "Your Playbook",
    description: "Our AI watches your top performers and builds a custom coaching model unique to your team.",
    detail: "Upload your sales scripts, objection handling guides, and product info. The AI adapts to your exact methodology.",
    color: "yellow",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Performance",
    subtitle: "Soars",
    description: "Real-time coaching on every call. Watch your team transform in weeks, not months.",
    detail: "Average clients see 40% improvement in close rates within 90 days. Results or your money back.",
    color: "red",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section id="how-it-works" className="border-b-[6px] border-black">
      {/* Section header */}
      <div className="grid grid-cols-12 border-b-[6px] border-black">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4 bg-[#0000FF] p-8 lg:p-12 border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white/30" />
              <div className="w-2 h-2 bg-white/50" />
              <div className="w-2 h-2 bg-white" />
            </div>
            <span className="text-white/60 text-xs uppercase tracking-widest">The Process</span>
          </div>
          <h2 className="mondrian-heading text-4xl lg:text-5xl text-white">
            How It Works
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 bg-white p-8 lg:p-12 flex items-center"
        >
          <p className="text-xl lg:text-2xl text-black/70 max-w-2xl font-medium">
            Get your team from kickoff to winning in under a week. No complex implementation, no lengthy training.
          </p>
        </motion.div>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-12">
        {steps.map((step, index) => {
          const bgColor = step.color === "blue" ? "bg-[#0000FF]" :
                          step.color === "yellow" ? "bg-[#FFDE00]" :
                          "bg-[#FF0000]";
          const textColor = step.color === "yellow" ? "text-black" : "text-white";
          const mutedColor = step.color === "yellow" ? "text-black/60" : "text-white/60";
          const borderColor = step.color === "yellow" ? "border-black" : "border-white";
          const isActive = activeStep === step.number;

          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`col-span-12 lg:col-span-4 ${index < 2 ? 'border-b-[6px] lg:border-b-0 lg:border-r-[6px]' : ''} border-black cursor-pointer`}
              onClick={() => setActiveStep(isActive ? null : step.number)}
            >
              {/* Number bar with progress indicator */}
              <div className="h-16 bg-black flex items-center px-6 lg:px-8">
                <span className="text-white text-2xl font-black">{step.number}</span>
                <div className="ml-4 flex-1 h-1 bg-white/20">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
                    className={`h-full ${step.color === "blue" ? "bg-[#0000FF]" : step.color === "yellow" ? "bg-[#FFDE00]" : "bg-[#FF0000]"}`}
                  />
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className={`w-3 h-3 ${step.color === "blue" ? "bg-[#0000FF]" : step.color === "yellow" ? "bg-[#FFDE00]" : "bg-[#FF0000]"}`} />
                </div>
              </div>

              {/* Content block */}
              <div className={`${bgColor} p-6 lg:p-8 min-h-[280px] lg:min-h-[320px] flex flex-col mondrian-cell group`}>
                <div className={`w-14 h-14 border-[3px] ${borderColor}/30 group-hover:${borderColor} flex items-center justify-center mb-6 transition-colors`}>
                  <step.icon className={`w-7 h-7 ${textColor}`} />
                </div>

                <h3 className={`mondrian-heading text-3xl lg:text-4xl ${textColor} mb-1`}>
                  {step.title}
                </h3>
                <h4 className={`mondrian-heading text-3xl lg:text-4xl ${mutedColor} mb-6`}>
                  {step.subtitle}
                </h4>

                <p className={`${mutedColor} text-lg`}>
                  {step.description}
                </p>

                {/* Expandable detail */}
                <motion.div 
                  initial={false}
                  animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className={`${textColor} text-sm mt-4 pt-4 border-t ${borderColor}/20`}>
                    {step.detail}
                  </p>
                </motion.div>

                <div className="mt-auto pt-6 flex items-center gap-2">
                  <span className={`${mutedColor} text-xs font-bold uppercase tracking-wider`}>
                    {isActive ? "Less" : "Learn More"}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${mutedColor} transition-transform ${isActive ? "rotate-90" : ""}`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
