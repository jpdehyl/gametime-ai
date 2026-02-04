"use client";

import { motion } from "framer-motion";
import { Plug, Brain, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect",
    subtitle: "Your Tools",
    description: "5-minute integration with Salesforce, HubSpot, Zoom, or any dialer.",
    color: "blue",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Learns",
    subtitle: "Your Playbook",
    description: "Our AI watches your top performers and builds a custom coaching model.",
    color: "yellow",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Performance",
    subtitle: "Soars",
    description: "Real-time coaching on every call. Watch your team transform.",
    color: "red",
  },
];

export function HowItWorks() {
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
          <span className="text-white/60 text-xs uppercase tracking-widest">The Process</span>
          <h2 className="mondrian-heading text-4xl lg:text-5xl text-white mt-2">
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

          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`col-span-12 lg:col-span-4 ${index < 2 ? 'border-b-[6px] lg:border-b-0 lg:border-r-[6px]' : ''} border-black`}
            >
              {/* Number bar */}
              <div className="h-16 bg-black flex items-center px-8">
                <span className="text-white text-2xl font-black">{step.number}</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className={`w-3 h-3 ${step.color === "blue" ? "bg-[#0000FF]" : step.color === "yellow" ? "bg-[#FFDE00]" : "bg-[#FF0000]"}`} />
                  <div className={`w-3 h-3 ${step.color === "blue" ? "bg-[#0000FF]" : step.color === "yellow" ? "bg-[#FFDE00]" : "bg-[#FF0000]"}`} />
                  <div className={`w-3 h-3 ${step.color === "blue" ? "bg-[#0000FF]" : step.color === "yellow" ? "bg-[#FFDE00]" : "bg-[#FF0000]"}`} />
                </div>
              </div>

              {/* Content block */}
              <div className={`${bgColor} p-8 lg:p-10 min-h-[300px] flex flex-col mondrian-cell`}>
                <div className={`w-14 h-14 border-[3px] ${step.color === "yellow" ? "border-black" : "border-white"} flex items-center justify-center mb-6`}>
                  <step.icon className={`w-7 h-7 ${textColor}`} />
                </div>

                <h3 className={`mondrian-heading text-3xl lg:text-4xl ${textColor} mb-1`}>
                  {step.title}
                </h3>
                <h4 className={`mondrian-heading text-3xl lg:text-4xl ${mutedColor} mb-6`}>
                  {step.subtitle}
                </h4>

                <p className={`${mutedColor} text-lg mt-auto`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
