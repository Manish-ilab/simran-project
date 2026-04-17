import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <section className="section-padding">
        <div className="container mx-auto rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-12">
          <h2 className="text-3xl font-bold font-heading sm:text-4xl">
            Ready to build something amazing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            I&apos;m currently available for freelance work or full-time
            opportunities. Let&apos;s talk about your next project.
          </p>
          <div className="mt-10">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
