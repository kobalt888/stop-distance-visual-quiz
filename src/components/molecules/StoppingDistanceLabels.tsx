import { useEffect, useState } from 'react';
import { Typography } from '../atoms';
import Fade from '@mui/material/Fade';

interface StoppingDistanceLabelsProps {
  pFrac: number;
  rFrac: number;
  perception: number;
  reaction: number;
  braking: number;
  total: number;
  labelX: (frac: number) => number;
  isMobile: boolean;
  barHeight: number;
  step?: number; // 0: none, 1: perception, 2: reaction, 3: braking
  barDrawTimes?: number[]; // [perception, reaction, braking] in ms
}

export default function StoppingDistanceLabels({
  pFrac,
  rFrac,
  perception,
  reaction,
  braking,
  total,
  labelX,
  isMobile,
  step = 0,
}: StoppingDistanceLabelsProps) {
  // labelStep: 0 = none, 1 = perception, 2 = reaction, 3 = braking, 4 = total
  const [labelStep, setLabelStep] = useState(0);

  useEffect(() => {
    if (step === 0) {
      setLabelStep(0);
      return;
    }
    setLabelStep(step);
  }, [step]);

  // Always show the label for the current step or higher
  return (
    <>
      <Fade in={labelStep >= 1} timeout={400} unmountOnExit>
        <Typography
          variant="caption"
          sx={{
            position: 'absolute',
            left: 4,
            top: 65,
            color: '#222',
            fontSize: isMobile ? '0.7rem' : '0.8rem',
          }}
        >
          Perception<br />{perception} ft
        </Typography>
      </Fade>
      <Fade in={labelStep >= 2} timeout={400} unmountOnExit>
        <Typography
          variant="caption"
          sx={{
            position: 'absolute',
            left: labelX(pFrac),
            top: 65,
            color: '#222',
            fontSize: isMobile ? '0.7rem' : '0.8rem',
          }}
        >
          Reaction<br />{reaction} ft
        </Typography>
      </Fade>
      <Fade in={labelStep >= 3} timeout={400} unmountOnExit>
        <Typography
          variant="caption"
          sx={{
            position: 'absolute',
            left: labelX(pFrac + rFrac*2),
            top: 65,
            color: '#222',
            fontSize: isMobile ? '0.7rem' : '0.8rem',
          }}
        >
          Braking<br />{braking} ft
        </Typography>
      </Fade>
      <Fade in={labelStep >= 3} timeout={400} unmountOnExit>
        <Typography
          variant="caption"
          sx={{
            position: 'absolute',
            right: '42%',
            top: 0,
            color: '#222',
            fontWeight: 700,
            fontSize: isMobile ? '0.8rem' : '0.9rem',
          }}
        >
          Total: {total} ft
        </Typography>
      </Fade>
    </>
  );
}
