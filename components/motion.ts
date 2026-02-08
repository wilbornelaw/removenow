import { TargetAndTransition, Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const cardHover: TargetAndTransition = {
  y: -8,
  scale: 1.01,
  rotateX: 1,
  rotateY: -1,
  transition: { duration: 0.24, ease: "easeOut" as const },
};

export const floatSlow: TargetAndTransition = {
  y: [0, -5, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};
