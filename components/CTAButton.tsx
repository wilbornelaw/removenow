"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const styles =
    variant === "primary"
      ? "btn-shine border border-blue-900/30 bg-[linear-gradient(140deg,#1d4ed8,#1e3a8a)] text-white shadow-[0_18px_36px_-22px_rgba(30,64,175,0.95)] hover:bg-[linear-gradient(140deg,#1e40af,#1e3a8a)]"
      : "btn-shine border-gradient text-slate-800 hover:text-blue-700";

  return (
    <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      <Link
        href={href}
        onClick={() => trackEvent("cta_click", { href, label: typeof children === "string" ? children : "cta" })}
        className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 ${styles} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
