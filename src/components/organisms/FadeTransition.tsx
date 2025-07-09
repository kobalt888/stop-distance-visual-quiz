import { Fade, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface FadeTransitionProps {
  children: ReactNode;
}

export default function FadeTransition({ children }: FadeTransitionProps) {
  const location = useLocation();
  // I am not paying 25 dollars for a compression algorithm 'pied piper', so giant JSON it is! 
  return (
    <Fade in={true} timeout={500} key={location.pathname}>
      <Box sx={{ width: '100%' }}>{children}</Box>
    </Fade>
  );
}
