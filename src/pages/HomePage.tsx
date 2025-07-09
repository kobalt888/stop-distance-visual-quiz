import { Box, Container, Stack, Typography, Button, LottieAnimation } from '../components/atoms';
import truckAnimation from '../media/lottie/truckOnHighway.json';
import { Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function HomePage() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState<boolean>(false);

  return (
    <Fade in={showContent} timeout={700}>
      <Container maxWidth="lg" sx={{ mt: { xs: 4, sm: 8 } }}>
        <Typography variant='h3' component="h1" gutterBottom>
          Stopping Distance
        </Typography>
        <Typography variant='h4' component="p">
          How speed drives safety on the road
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 700, mb: 4, display: 'flex', justifyContent: 'center' }}>
          <LottieAnimation animationData={truckAnimation} loop={true} style={{ width: '100%', height: 'auto' }} onLoaded={() => setShowContent(true)} />
        </Box>
        <Stack direction="row" spacing={3}>
          <Button variant="contained" size='large' onClick={() => navigate('/quiz')}>
            Start Quiz
          </Button>
          <Button variant="contained" size='large' onClick={() => navigate('/study')}>
            Study
          </Button>
        </Stack>
      </Container>
    </Fade>
  );
}
