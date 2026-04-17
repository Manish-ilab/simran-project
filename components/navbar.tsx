"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-4 bg-[rgba(253,248,245,0.9)] backdrop-blur-md border-b border-border">
      {/* Logo */}
      <Link
        href="/"
        className="nav-logo flex items-center text-[1.3rem] font-heading font-normal tracking-wider"
      >
        <div className="w-8 h-8 mr-2 flex items-center justify-center rounded-full overflow-hidden">
          <Image src="/icon.svg" alt="Logo" width={32} height={32} />
        </div>
        Simran Shrestha
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-[13px] text-text-mid tracking-widest uppercase transition-colors duration-200 hover:text-rose-dark"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-text-mid"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-cream border-b border-border p-6 md:hidden">
          <ul className="flex flex-col gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[13px] text-text-mid tracking-widest uppercase block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
