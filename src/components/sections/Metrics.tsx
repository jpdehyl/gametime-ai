"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const metrics = [
  {
    value: "40%",
    label: "Increase in Close Rates",
    description: "Average improvement in win rates within 90 days",
  },
  {
    value: "65%",
    label: "Faster Ramp Time",
    description: "New reps reach quota faster with AI coaching",
  },
  {
    value: "3.2x",
    label: "ROI in Year One",
    description: "Average return on investment for enterprise clients",
  },
  {
    value: "50%",
    label: "Less Manager Time",
    description: "On manual call reviews and coaching sessions",
  },
];

export function Metrics() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-accent text-white">
      <Container>
        <SectionHeading
          badge="Results"
          title="Proven Impact on Sales Performance"
          subtitle="Don't just take our word for it. Here's what our customers achieve."
          className="[&_h2]:text-white [&_p]:text-white/80 [&_span]:bg-white/10 [&_span]:text-white"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold mb-2">{metric.label}</div>
              <p className="text-sm text-white/70">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
