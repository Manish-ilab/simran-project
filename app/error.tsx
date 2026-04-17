"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="section-padding flex flex-col items-center justify-center text-center min-h-[60vh]">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 mb-6">
        <AlertTriangle className="h-8 w-8 text-red-500" />
      </div>
      <h2 className="text-2xl font-bold font-heading">Something went wrong</h2>
      <p className="mt-4 text-muted-foreground max-w-md">
        An unexpected error occurred. Please try again or return to the homepage if the problem persists.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={reset}>Try Again</Button>
        <Button variant="outline" asChild>
          <a href="/">Go Home</a>
        </Button>
      </div>
    </div>
  );
}
