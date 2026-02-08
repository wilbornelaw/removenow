"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CTAButton from "@/components/CTAButton";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/78 backdrop-blur-xl transition ${
        scrolled
          ? "border-cyan-200/70 shadow-[0_12px_30px_-26px_rgba(2,132,199,0.85)]"
          : "border-slate-200/80"
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/RM_logo.png"
            alt="RemoveNow logo"
            width={184}
            height={54}
            priority
            className="h-10 w-auto sm:h-11"
          />
          <span className="text-lg font-semibold tracking-tight">RemoveNow</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-slate-700 transition hover:text-cyan-700"
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/0 transition group-hover:bg-cyan-400" />
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton href="/contact" variant="secondary" className="py-2.5">
            Talk to an Expert
          </CTAButton>
          <CTAButton href="/contact" className="py-2.5">
            Start a Takedown
          </CTAButton>
        </div>

        <button
          type="button"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-cyan-100 bg-white/95 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-cyan-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <CTAButton href="/contact" variant="secondary" className="w-full">
                Talk to an Expert
              </CTAButton>
              <CTAButton href="/contact" className="w-full">
                Start a Takedown
              </CTAButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
