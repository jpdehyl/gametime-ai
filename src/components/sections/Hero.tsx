"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRef, useState } from "react";

const videos = [
  { src: "/videos/demo-1.mp4", label: "Lead Intel" },
  { src: "/videos/demo-2.mp4", label: "Call Center" },
  { src: "/videos/demo-3.mp4", label: "Analytics" },
];

export function Hero() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVideoEnd = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="min-h-screen pt-20 lg:pt-24 bg-background">
      <div className="container">
        {/* Top content */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-8"
          >
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-accent-red rounded-full"></div>
              <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
              <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
            </div>
            <span className="text-sm text-muted-foreground">
              A product by GroundGame
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="heading-xl mb-6"
          >
            The AI Layer That Makes Sales Teams{" "}
            <span className="accent-blue">Unstoppable</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-subtle leading-relaxed max-w-2xl mx-auto mb-10"
          >
            From pre-call research to post-call coaching — GameTime gives every
            rep an AI copilot that knows your playbook, preps your calls, and
            coaches in real-time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" className="group">
              Request Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("platform")}
              className="group"
            >
              See the Platform
            </Button>
          </motion.div>
        </div>

        {/* Video showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video tabs */}
          <div className="flex items-center gap-1 mb-4">
            {videos.map((video, index) => (
              <button
                key={video.label}
                onClick={() => setActiveVideo(index)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                  activeVideo === index
                    ? "bg-card border border-b-0 border-border text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      activeVideo === index
                        ? index === 0
                          ? "bg-accent-red"
                          : index === 1
                          ? "bg-accent-blue"
                          : "bg-accent-yellow"
                        : "bg-muted-foreground/30"
                    }`}
                  ></span>
                  {video.label}
                </span>
              </button>
            ))}
          </div>

          {/* Video container */}
          <div
            className="relative bg-card rounded-xl border border-border overflow-hidden shadow-2xl cursor-pointer group"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              key={videos[activeVideo].src}
              src={videos[activeVideo].src}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-auto"
            />

            {/* Play/Pause overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity ${
                isPlaying
                  ? "opacity-0 group-hover:opacity-100"
                  : "opacity-100"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <Play
                  className={`w-6 h-6 text-white ${isPlaying ? "hidden" : ""}`}
                  fill="white"
                />
                <div
                  className={`flex gap-1 ${isPlaying ? "" : "hidden"}`}
                >
                  <div className="w-1 h-5 bg-white rounded-full"></div>
                  <div className="w-1 h-5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeVideo === index
                      ? "bg-white w-6"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-red/5 rounded-xl -z-10 blur-2xl scale-105"></div>
        </motion.div>
      </div>

      {/* Bottom spacer */}
      <div className="h-16 lg:h-24"></div>
    </section>
  );
}
