import { motion } from 'framer-motion';

interface TruckImageProps {
  x: number;
  barHeight: number;
  truckWidth: number | string;
  truckHeight: number | string;
  truckImg: string;
}

export default function TruckImage({ x, barHeight, truckWidth, truckHeight, truckImg }: TruckImageProps) {
  // Ensure truck never goes out of bounds (left edge >= 0)
  const safeX = Math.max(0, x);
  return (
    <motion.img
      src={truckImg}
      alt="Truck"
      initial={{ x: 0 }}
      animate={{ x: safeX }}
      transition={{ duration: 0.7 }}
      style={{
        position: 'absolute',
        top: barHeight / 2.6, // magical aspect ratio number
        left: 0,
        zIndex: 2,
        width: truckWidth,
        height: truckHeight,
        objectFit: 'contain',
        pointerEvents: 'none',
      }}
    />
  );
}
