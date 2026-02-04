"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 bg-background">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Sales?
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              Join hundreds of high-performing teams using GameTime.ai to close
              more deals and build winning sales cultures.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="secondary" size="lg">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule a Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/60">
              No credit card required. Get started in under 5 minutes.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
