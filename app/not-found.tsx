import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="section-padding flex flex-col items-center justify-center text-center min-h-[60vh]">
      <p className="text-8xl font-extrabold font-heading text-primary/20">404</p>
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted mt-4 mb-6">
        <Search className="h-8 w-8 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-bold font-heading">Page Not Found</h2>
      <p className="mt-4 text-muted-foreground max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <div className="mt-8">
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
