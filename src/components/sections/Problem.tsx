"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const problems = [
  {
    icon: TrendingDown,
    title: "Inconsistent Performance",
    description:
      "Your best reps close 3x more than average, but you can't replicate their success across the team.",
  },
  {
    icon: Clock,
    title: "Slow Ramp-Up Time",
    description:
      "New hires take 6+ months to become productive, costing you thousands in lost revenue.",
  },
  {
    icon: Users,
    title: "Limited Coaching Bandwidth",
    description:
      "Managers can only review a fraction of calls, leaving most opportunities for improvement undiscovered.",
  },
  {
    icon: AlertTriangle,
    title: "Missed Buying Signals",
    description:
      "Reps miss critical moments in conversations that could turn a maybe into a yes.",
  },
];

export function Problem() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <SectionHeading
          badge="The Challenge"
          title="Sales Teams Are Leaving Money on the Table"
          subtitle="Traditional coaching methods can't keep up with the pace of modern sales. Your team needs real-time support, not post-mortem reviews."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-muted/50 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
