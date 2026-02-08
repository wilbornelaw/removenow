"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/components/motion";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`section-circuit relative overflow-hidden py-16 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30" />
      <motion.div
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {(title || subtitle) && (
          <motion.div className="mb-10 max-w-3xl" variants={fadeUp}>
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-3 text-lg text-slate-600">{subtitle}</p>}
          </motion.div>
        )}
        <motion.div variants={fadeUp}>{children}</motion.div>
      </motion.div>
    </motion.section>
  );
}
