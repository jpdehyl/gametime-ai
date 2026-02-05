"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section className="section-padding bg-background">
      <Container size="narrow">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="heading-lg">
              Ready to Give Your Team an <span className="accent-blue">Unfair Advantage</span>?
            </h2>
            
            <p className="text-xl text-subtle max-w-2xl mx-auto">
              Join the companies already using GameTime to transform their sales operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <Button as="a" href="mailto:main@dehyl.ca?subject=GameTime.ai%20-%20Request%20Access" size="lg" className="group">
              Request Early Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-muted-foreground">
              or email{" "}
              <a 
                href="mailto:main@dehyl.ca?subject=GameTime.ai%20-%20Request%20Access" 
                className="text-accent-blue hover:underline"
              >
                main@dehyl.ca
              </a>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
