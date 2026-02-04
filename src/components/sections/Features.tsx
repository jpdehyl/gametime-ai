"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  BarChart3,
  MessageSquare,
  Target,
  Shield,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Brain,
    title: "AI Research Agent",
    description:
      "Automatically research prospects before calls. Know their company, pain points, and triggers before you dial.",
    color: "bg-primary",
  },
  {
    icon: Zap,
    title: "Real-Time Coaching",
    description:
      "Get live suggestions during calls. Handle objections, remember key points, and never miss a beat.",
    color: "bg-secondary",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track talk ratios, sentiment, and conversion patterns. Identify what's working and scale it.",
    color: "bg-accent",
  },
  {
    icon: MessageSquare,
    title: "Conversation Intelligence",
    description:
      "Every call transcribed, analyzed, and searchable. Find winning moments and share them instantly.",
    color: "bg-primary",
  },
  {
    icon: Target,
    title: "Deal Scoring",
    description:
      "AI-powered deal health scores. Know which opportunities need attention before it's too late.",
    color: "bg-secondary",
  },
  {
    icon: Shield,
    title: "CRM Integration",
    description:
      "Seamlessly sync with Salesforce, HubSpot, and more. Notes, tasks, and insights flow automatically.",
    color: "bg-accent",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <Container>
        <SectionHeading
          badge="Features"
          title="Everything Your Team Needs to Win"
          subtitle="A complete AI toolkit designed for high-performance sales teams. Built by sellers, for sellers."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
