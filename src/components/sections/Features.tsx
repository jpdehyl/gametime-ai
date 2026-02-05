"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const accentColors: Record<string, string> = {
  red: "bg-accent-red",
  yellow: "bg-accent-yellow",
  blue: "bg-accent-blue",
};

const features = [
  {
    title: "Smart Call Queue",
    description: "AI-prioritized by fit score, urgency, research status",
    screenshot: "/screenshots/dashboard-callqueue.jpg",
    alt: "Smart Call Queue with AI-prioritized leads and fit scores",
    accent: "red",
    size: "large"
  },
  {
    title: "AI Call Analysis",
    description: "Every call scored across 7 dimensions",
    screenshot: "/screenshots/call-analysis.jpg",
    alt: "Call Analysis interface with performance scorecard and observations",
    accent: "blue",
    size: "medium"
  },
  {
    title: "SDR Leaderboard",
    description: "Gamified performance tracking with badges",
    screenshot: "/screenshots/dashboard-leaderboard.jpg",
    alt: "SDR Leaderboard with action required items and monthly goals",
    accent: "yellow",
    size: "medium"
  },
  {
    title: "AI Reports Hub",
    description: "Team oversight, disposition breakdown, coaching insights",
    screenshot: "/screenshots/reports-hub.jpg",
    alt: "AI Reports Hub showing team oversight and performance analytics",
    accent: "blue",
    size: "medium"
  },
  {
    title: "Team Management",
    description: "Org structure, performance by rep, manager views",
    screenshot: "/screenshots/team-directory.jpg",
    alt: "Team Directory showing 3 Managers, 20 SDRs, and 5 AEs",
    accent: "red",
    size: "medium"
  },
  {
    title: "Manager Dashboard",
    description: "KPIs, funnels, and trends at a glance",
    screenshot: "/screenshots/manager-dashboard.jpg",
    alt: "Manager Dashboard with KPIs, sales funnel, and activity charts",
    accent: "yellow",
    size: "medium"
  }
];

export function Features() {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-6">Built for Sales Teams That Move Fast</h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`card-hover bg-card border border-border rounded-xl p-6 ${
                feature.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Accent line */}
              <div className={`w-8 h-1 ${accentColors[feature.accent]} mb-6`}></div>
              
              {/* Feature content */}
              <div className="space-y-4 mb-6">
                <h3 className="heading-md">{feature.title}</h3>
                <p className="text-subtle">{feature.description}</p>
              </div>

              {/* Screenshot */}
              <div className="bg-muted p-3 rounded-lg">
                <Image
                  src={feature.screenshot}
                  alt={feature.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
