"use client";

import { motion } from "framer-motion";
import { cardHover, fadeUp } from "@/components/motion";

type CardProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export default function Card({ title, description, icon, children, className = "" }: CardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={cardHover}
      className={`border-gradient glow-cyan rounded-2xl p-6 shadow-[0_16px_36px_-28px_rgba(15,23,42,0.7)] transition ${className}`}
    >
      {(icon || title) && (
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {icon && <span className="rounded-lg border border-cyan-200/60 bg-cyan-50/70 p-2 text-cyan-700">{icon}</span>}
        </div>
      )}
      {description && <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>}
      {children}
    </motion.article>
  );
}
