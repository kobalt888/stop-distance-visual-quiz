import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface BarSegmentProps {
  width: number | string;
  left: number | string;
  color: string;
  icon?: ReactNode;
  barHeight: number | string;
  opacity?: number;
  zIndex?: number;
}

export default function BarSegment({
  width,
  left,
  color,
  icon,
  barHeight,
  opacity = 0.7,
  zIndex = 1,
}: BarSegmentProps) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width }}
      transition={{ duration: 0.7 }}
      style={{
        height: barHeight,
        background: color,
        opacity,
        position: 'absolute',
        left,
        zIndex,
      }}
    >
      {icon}
    </motion.div>
  );
}
