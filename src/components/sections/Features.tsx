"use client";

import { motion } from "framer-motion";
import { 
  Mic, 
  Brain, 
  BarChart3, 
  Zap, 
  Shield, 
  Users,
  Sparkles,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Real-Time Coaching",
    description: "AI whispers guidance during live calls. Your reps know exactly what to say, when to say it.",
    color: "blue",
    size: "large",
  },
  {
    icon: Brain,
    title: "Learns Your Playbook",
    description: "Trains on your top performers. Unique to your sales motion.",
    color: "yellow",
    size: "small",
  },
  {
    icon: BarChart3,
    title: "Instant Analytics",
    description: "Every call scored. Every trend surfaced. No manual review needed.",
    color: "red",
    size: "small",
  },
  {
    icon: Zap,
    title: "5-Minute Setup",
    description: "Connect your tools. Import your playbook. Start coaching. It's that simple.",
    color: "white",
    size: "medium",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified. GDPR compliant. Your data stays yours.",
    color: "black",
    size: "small",
  },
  {
    icon: Users,
    title: "Team Insights",
    description: "See who's improving. Identify coaching opportunities. Scale what works.",
    color: "yellow",
    size: "medium",
  },
  {
    icon: Sparkles,
    title: "AI Summaries",
    description: "Automatic call notes. Action items extracted. CRM updated.",
    color: "blue",
    size: "small",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Never miss a coaching moment. Always on, always ready.",
    color: "red",
    size: "small",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-[#0000FF]",
    text: "text-white",
    muted: "text-white/60",
    iconBorder: "border-white/30",
  },
  yellow: {
    bg: "bg-[#FFDE00]",
    text: "text-black",
    muted: "text-black/60",
    iconBorder: "border-black/30",
  },
  red: {
    bg: "bg-[#FF0000]",
    text: "text-white",
    muted: "text-white/60",
    iconBorder: "border-white/30",
  },
  white: {
    bg: "bg-white",
    text: "text-black",
    muted: "text-black/60",
    iconBorder: "border-black/30",
  },
  black: {
    bg: "bg-black",
    text: "text-white",
    muted: "text-white/50",
    iconBorder: "border-white/30",
  },
};

export function Features() {
  return (
    <section id="features" className="border-b-[6px] border-black">
      {/* Section header */}
      <div className="grid grid-cols-12 border-b-[6px] border-black">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4 bg-black p-8 lg:p-12 border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-[#00FF00]" />
            <span className="text-white/50 text-xs uppercase tracking-widest">Capabilities</span>
          </div>
          <h2 className="mondrian-heading text-4xl lg:text-5xl text-white">
            Built to Win
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 bg-white p-8 lg:p-12 flex items-center"
        >
          <p className="text-xl lg:text-2xl text-black/70 max-w-2xl font-medium">
            Every feature designed for one thing: helping your team close more deals, faster.
          </p>
        </motion.div>
      </div>

      {/* Features bento grid */}
      <div className="grid grid-cols-6 lg:grid-cols-12">
        {features.map((feature, index) => {
          const colors = colorClasses[feature.color as keyof typeof colorClasses];
          const Icon = feature.icon;
          
          const sizeClasses = {
            small: "col-span-3 lg:col-span-3",
            medium: "col-span-6 lg:col-span-4",
            large: "col-span-6 lg:col-span-6",
          };

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${sizeClasses[feature.size as keyof typeof sizeClasses]} ${colors.bg} border-b-[6px] border-r-[6px] border-black p-5 lg:p-6 min-h-[180px] lg:min-h-[220px] flex flex-col mondrian-cell cursor-pointer group`}
            >
              <div className={`w-10 h-10 lg:w-12 lg:h-12 border-2 ${colors.iconBorder} group-hover:border-current flex items-center justify-center mb-4 transition-colors`}>
                <Icon className={`w-5 h-5 lg:w-6 lg:h-6 ${colors.muted} group-hover:opacity-100 transition-opacity`} />
              </div>
              
              <h3 className={`mondrian-heading text-base lg:text-xl ${colors.text} mb-2`}>
                {feature.title}
              </h3>
              
              <p className={`${colors.muted} text-xs lg:text-sm leading-relaxed mt-auto`}>
                {feature.description}
              </p>

              {feature.size === 'large' && (
                <div className="mt-4 flex items-center gap-3">
                  <div className={`px-3 py-1 border ${colors.iconBorder} ${colors.muted} text-xs font-bold uppercase group-hover:border-current transition-colors`}>
                    Learn More
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
