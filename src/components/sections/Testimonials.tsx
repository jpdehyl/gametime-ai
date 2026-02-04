"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "GameTime.ai transformed how our BPO operates. Our agents are closing 40% more deals and ramping up in half the time.",
    author: "Sarah Chen",
    role: "VP of Sales Operations",
    company: "TechFlow Solutions",
  },
  {
    quote:
      "The real-time coaching is a game-changer. It's like having your best sales manager on every single call.",
    author: "Marcus Johnson",
    role: "Director of Sales",
    company: "Velocity Partners",
  },
  {
    quote:
      "We evaluated 5 different platforms. GameTime.ai was the only one that actually understood enterprise sales complexity.",
    author: "Emily Rodriguez",
    role: "Chief Revenue Officer",
    company: "Nexus Enterprise",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="Trusted by Sales Leaders Everywhere"
          subtitle="See why top-performing teams choose GameTime.ai to drive their sales success."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-card-foreground mb-6 text-lg leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
