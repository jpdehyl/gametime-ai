"use client";

import { motion } from "framer-motion";
import { Upload, Sparkles, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Connect Your Tools",
    description:
      "Integrate with your existing CRM, dialer, and communication tools in minutes. No complex setup required.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Learns Your Playbook",
    description:
      "Our AI analyzes your best calls and builds a custom coaching model tailored to your sales methodology.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Watch Performance Soar",
    description:
      "Your team gets real-time guidance on every call. Track improvement with detailed analytics and insights.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <Container>
        <SectionHeading
          badge="How It Works"
          title="Get Started in Three Simple Steps"
          subtitle="Deploy GameTime.ai across your team in days, not months. See ROI from week one."
        />

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 z-10">
                  <step.icon className="w-8 h-8 text-white" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
