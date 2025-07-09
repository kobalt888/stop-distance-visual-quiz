import { motion } from 'framer-motion';
import { Box, Typography } from '../../components/atoms';
import { calculateStoppingDistance } from '../study/stoppingDistanceUtils';
import truckImg from '../../media/images/truck-removebg-preview.png';
import footPedalImg from '../../media/images/footPedal.png';
import brakeImg from '../../media/images/brake.png';
import { useMediaQuery, useTheme } from '@mui/material';
import React, { useRef, useLayoutEffect, useState } from 'react';
import { RoadBar, TruckImage } from '../../components/atoms';
import { StoppingDistanceBar, StoppingDistanceLabels } from '../../components/molecules';

// Props: mph (number), step (1, 2, 3)
interface StoppingDistanceAnimationProps {
  mph?: number;
  step?: number;
}

export default function StoppingDistanceAnimation({ mph = 55, step = 0 }: StoppingDistanceAnimationProps) {
  const { perception, reaction, braking, total } = calculateStoppingDistance(mph);
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  // Responsive bar width: 100% on mobile, max 550px; 400px on desktop
  const barHeight = 40;
  const truckHeight = barHeight * 1.4;
  const truckWidth = truckHeight * 1.5;

  // Fractions for each segment
  const pFrac: number = perception / total;
  const rFrac: number = reaction / total;
  const bFrac: number = braking / total;
  const barFrac: number = step === 0 ? 0 : step === 1 ? pFrac : step === 2 ? pFrac + rFrac : 1;

  // Ref and state for bar width
  const barRef = useRef<HTMLDivElement>(null);
  const [barWidth, setBarWidth] = useState<number>(0);

  useLayoutEffect(() => {
    if (barRef.current) {
      setBarWidth(barRef.current.offsetWidth);
    }
    // Listen for resize
    const handleResize = (): void => {
      if (barRef.current) setBarWidth(barRef.current.offsetWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, [isMobile]);

  // Calculate truck x position in px
  const truckX: number = barWidth * barFrac - truckWidth;

  // Helper for label positions
  const labelX = (frac: number): number => barWidth * frac + 4;

  return (
    <>
      <Box
        sx={{
          width: '100%',
          mx: 'auto',
          height: 90,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 0,
        }}
      >
        <RoadBar barHeight={barHeight} />
        {/* Animated bar segments */}
        <Box ref={barRef} sx={{ width: '100%', height: barHeight, position: 'absolute', left: 0, zIndex: 1 }}>
          <StoppingDistanceBar
            barWidth={barWidth}
            barHeight={barHeight}
            pFrac={pFrac}
            rFrac={rFrac}
            bFrac={bFrac}
            step={step}
            footPedalImg={footPedalImg}
            brakeImg={brakeImg}
          />
        </Box>
        <TruckImage x={truckX} barHeight={barHeight} truckWidth={truckWidth} truckHeight={truckHeight} truckImg={truckImg} />
        <StoppingDistanceLabels
          pFrac={pFrac}
          rFrac={rFrac}
          perception={perception}
          reaction={reaction}
          braking={braking}
          total={total}
          labelX={labelX}
          isMobile={isMobile}
          barHeight={barHeight}
          step={step}
        />
      </Box>
    </>
  );
}
