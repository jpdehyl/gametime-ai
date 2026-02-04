"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stages = [
  {
    title: "Research",
    description: "AI researches every lead before you pick up the phone",
    screenshot: "/screenshots/leads-database.jpg",
    alt: "Lead Intel Database showing 875 leads with company and contact information"
  },
  {
    title: "Prepare", 
    description: "BANT qualification, pain points, and discovery questions — ready in seconds",
    screenshot: "/screenshots/call-prep.jpg",
    alt: "Call Prep view showing 90% fit score, BANT analysis, and discovery questions"
  },
  {
    title: "Execute",
    description: "Call with confidence. AI coaches you through every conversation.",
    screenshot: "/screenshots/call-center.jpg",
    alt: "Call Center interface with Zoom Phone integration and recent calls list"
  },
  {
    title: "Handoff",
    description: "Qualified leads flow to AEs with full context and AI-generated strategy",
    screenshot: "/screenshots/ae-pipeline.jpg", 
    alt: "AE Pipeline showing TOFU summary, company intel, and sales strategy"
  }
];

export function Platform({ id }: { id?: string }) {
  return (
    <section id={id} className="section-padding-lg bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-6">One Platform. Every Advantage.</h2>
          <p className="text-subtle text-xl">
            GameTime covers the entire sales cycle — from the moment a lead enters your pipeline to the moment it closes.
          </p>
        </motion.div>

        <div className="space-y-20">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 bg-accent-${index === 0 ? 'red' : index === 1 ? 'yellow' : index === 2 ? 'blue' : 'red'} rounded-full`}></div>
                  <h3 className="heading-md">{stage.title}</h3>
                </div>
                <p className="text-lg text-subtle leading-relaxed">
                  {stage.description}
                </p>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="card-hover bg-card p-4 rounded-lg border border-border">
                  <Image
                    src={stage.screenshot}
                    alt={stage.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded"
                    priority={index === 0}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}