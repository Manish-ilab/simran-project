"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-padding flex flex-col items-center justify-center text-center lg:min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl font-extrabold sm:text-6xl md:text-7xl">
          Building <span className="text-primary italic">exceptional</span> digital experiences.
        </h1>
        <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
          Senior Frontend Engineer with a passion for clean code, high performance, and user-centric design.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View my work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">About me</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
