"use client";

import { motion } from "framer-motion";
import { Plug, Upload, Zap } from "lucide-react";

const accentColors: Record<string, string> = {
  red: "bg-accent-red",
  yellow: "bg-accent-yellow",
  blue: "bg-accent-blue",
};

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect",
    description: "Integrate with your CRM, dialer, and tools",
    accent: "red"
  },
  {
    number: "02", 
    icon: Upload,
    title: "Import",
    description: "Bring your leads, playbook, and team structure",
    accent: "yellow"
  },
  {
    number: "03",
    icon: Zap,
    title: "Go Live",
    description: "AI starts researching, scoring, and coaching immediately",
    accent: "blue"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-muted">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-6">Live in Days, Not Months</h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center space-y-6"
            >
              {/* Step number with accent */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 ${accentColors[step.accent]} rounded-full flex items-center justify-center`}>
                    <span className="text-xs font-bold text-white">{step.number}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="heading-md">{step.title}</h3>
                <p className="text-subtle">{step.description}</p>
              </div>

              {/* Connection line (not for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
