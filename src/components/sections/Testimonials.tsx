"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "We went from 18% close rate to 26% in 90 days. That's not incremental—that's transformational.",
    author: "Sarah Chen",
    role: "VP of Sales Operations",
    company: "TechFlow Solutions",
    color: "blue",
  },
  {
    quote: "My reps stopped asking 'what should I have said?' because they already know. The AI tells them in real-time.",
    author: "Marcus Johnson",
    role: "Director of Sales",
    company: "Velocity Partners",
    color: "yellow",
  },
  {
    quote: "I've bought a lot of sales tools. This is the first one my team actually uses without me forcing them.",
    author: "Emily Rodriguez",
    role: "Chief Revenue Officer",
    company: "Nexus Enterprise",
    color: "red",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b-[6px] border-black">
      {/* Section header */}
      <div className="grid grid-cols-12 border-b-[6px] border-black">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4 bg-[#FFDE00] p-8 lg:p-12 border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black"
        >
          <span className="text-black/60 text-xs uppercase tracking-widest">What They Say</span>
          <h2 className="mondrian-heading text-4xl lg:text-5xl text-black mt-2">
            Testimonials
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 bg-white p-8 lg:p-12 flex items-center"
        >
          <p className="text-xl lg:text-2xl text-black/70 max-w-2xl font-medium">
            Sales leaders share their GameTime.ai results. Real numbers. Real impact.
          </p>
        </motion.div>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-12">
        {testimonials.map((testimonial, index) => {
          const bgColor = testimonial.color === "blue" ? "bg-[#0000FF]" :
                          testimonial.color === "yellow" ? "bg-[#FFDE00]" :
                          "bg-[#FF0000]";
          const textColor = testimonial.color === "yellow" ? "text-black" : "text-white";
          const mutedColor = testimonial.color === "yellow" ? "text-black/60" : "text-white/60";

          return (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`col-span-12 lg:col-span-4 ${index < 2 ? 'border-b-[6px] lg:border-b-0 lg:border-r-[6px]' : ''} border-black`}
            >
              {/* Quote block */}
              <div className={`${bgColor} p-8 lg:p-10 min-h-[350px] flex flex-col justify-between mondrian-cell`}>
                {/* Quote mark */}
                <div className={`text-6xl font-black ${mutedColor} leading-none`}>
                  &ldquo;
                </div>

                {/* Quote text */}
                <p className={`${textColor} text-xl lg:text-2xl font-bold leading-snug my-6`}>
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${testimonial.color === "yellow" ? "bg-black" : "bg-white"} flex items-center justify-center`}>
                    <span className={`font-black text-lg ${testimonial.color === "yellow" ? "text-white" : "text-black"}`}>
                      {testimonial.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className={`${textColor} font-bold`}>{testimonial.author}</div>
                    <div className={`${mutedColor} text-sm`}>{testimonial.role}</div>
                    <div className={`${mutedColor} text-sm`}>{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Social proof bar */}
      <div className="grid grid-cols-12 border-t-[6px] border-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4 bg-black p-6 lg:p-8 border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black"
        >
          <div className="flex items-center gap-4">
            <div className="text-white text-4xl font-black">4.9/5</div>
            <div className="text-white/50 text-sm uppercase tracking-wider">G2 Rating</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-6 lg:col-span-4 bg-white p-6 lg:p-8 border-r-[6px] border-black"
        >
          <div className="flex items-center gap-4">
            <div className="text-black text-4xl font-black">500+</div>
            <div className="text-black/50 text-sm uppercase tracking-wider">Reviews</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-6 lg:col-span-4 bg-[#0000FF] p-6 lg:p-8"
        >
          <div className="flex items-center gap-4">
            <div className="text-white text-4xl font-black">#1</div>
            <div className="text-white/50 text-sm uppercase tracking-wider">Sales AI Platform</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
