import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const headingFont = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Professional Portfolio | Senior Developer",
  description: "Senior JavaScript Developer with 15+ years of experience building performant web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} font-body bg-background text-foreground antialiased selection:bg-primary/20`}
      >
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
