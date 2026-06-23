import { motion } from 'motion/react';
import type { CSSProperties, ReactNode } from 'react';

// Shared easing — matches the existing motion transitions used across the site.
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

interface RevealProps {
  children: ReactNode;
  /** Direction the content travels in from. Defaults to a subtle rise. */
  direction?: Direction;
  /** Stagger helper — delay in seconds before the reveal starts. */
  delay?: number;
  duration?: number;
  /** Portion of the element that must be visible before it animates in. */
  amount?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Clean scroll-reveal wrapper. Fades + glides content into place once it
 * enters the viewport. Animates a single time so the page never feels jumpy.
 */
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  className,
  style,
}: RevealProps) {
  const { x, y } = offsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
