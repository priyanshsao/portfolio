import React from 'react';
import { Button } from '@/components/ui/button';
import TypingAnimation from '@/components/magic-ui/typing-animation';
import FadeIn from '@/components/magic-ui/fade-in';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import me from "../../assets/me.jpg"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn direction="up" delay={0.2}>
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 mx-auto shadow-2xl border-4 border-white/20">
                <img 
                  src={ me } 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </FadeIn>

        <TypingAnimation
          text="Backend developer and Devops"
          className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          duration={100}
        />

        <FadeIn direction="up" delay={0.8}>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating software apps using modern architectures.
            Specializing in React, JavaScript, Go, Kubernetes.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={1.0}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download CV
            </Button>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={1.2}>
          <div className="mt-16 flex justify-center">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-muted-foreground"
            >
              <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
                <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}