"use client";

import { motion } from "framer-motion";

export function About({ id }: { id?: string }) {
  return (
    <section id={id} className="section-padding bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">Built by GroundGame</h2>
            
            <p className="text-xl text-subtle leading-relaxed mb-8">
              We believe AI should work alongside humans, not replace them. GameTime is the AI layer 
              that makes your existing team dramatically more effective.
            </p>
            
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">Marc Snegg, CEO</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-4 pt-8"
          >
            <div className="flex space-x-1">
              <div className="w-4 h-4 bg-accent-red"></div>
              <div className="w-4 h-4 bg-accent-yellow"></div>
              <div className="w-4 h-4 bg-accent-blue"></div>
            </div>
            <span className="text-muted-foreground">A product by GroundGame</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}