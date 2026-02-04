"use client";

import { motion } from "framer-motion";

const problems = [
  {
    text: "Reps spend 40% of their time on research instead of selling",
    accent: "red"
  },
  {
    text: "New hires take 6+ months to ramp to full productivity", 
    accent: "yellow"
  },
  {
    text: "Managers can't coach every call — critical moments get missed",
    accent: "blue"
  }
];

export function Problem() {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="heading-lg mb-12">
            Your Sales Team Has a Preparation Problem
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-hover bg-card p-8 rounded-lg border border-border"
            >
              <div className={`w-2 h-16 bg-accent-${problem.accent} mb-6 rounded`}></div>
              <p className="text-lg leading-relaxed">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}