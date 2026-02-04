"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const logos = [
  { name: "Acme Corp", initials: "AC" },
  { name: "TechFlow", initials: "TF" },
  { name: "Velocity", initials: "VL" },
  { name: "Nexus", initials: "NX" },
  { name: "Pinnacle", initials: "PN" },
  { name: "Zenith", initials: "ZN" },
];

export function LogoBar() {
  return (
    <section className="py-16 bg-muted">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by industry leaders
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-center w-24 h-12 rounded-lg bg-background border border-border text-muted-foreground font-semibold text-lg hover:text-foreground hover:border-primary/30 transition-colors"
            >
              {logo.initials}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
