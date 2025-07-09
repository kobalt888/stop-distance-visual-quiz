import { useState } from 'react';
import { Box, Typography, Button, Stack, LottieAnimation } from '../../components/atoms';
import { studySlides } from '.';
import { PageHeader } from '../../components/organisms';
import { Fade, useMediaQuery, useTheme, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';

interface StudySlide {
  id: number;
  content: string;
  paragraph?: string | null;
  bullets?: string[];
  lottie?: Record<string, unknown> | null;
  media?: React.ReactNode | null;
}

export default function StudySlideshow() {
  const [index, setIndex] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);
  const slide: StudySlide = studySlides[index] as StudySlide;
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleNav = (dir: 'next' | 'prev'): void => {
    setShow(false);
    setTimeout(() => {
      setIndex((i: number) => {
        const next = dir === 'next' ? Math.min(i + 1, studySlides.length - 1) : Math.max(i - 1, 0);
        return next;
      });
      setShow(true);
    }, 300);
  };

  return (
    <>
      <PageHeader title="Study" />
      <Fade in={show} timeout={400} key={slide.id}>
        <Box
          sx={{
            position: 'relative',
            width: isMobile ? '100vw' : '100%',
            maxWidth: isMobile ? '100vw' : 900,
            minHeight: isMobile ? '100vh' : '60vh',
            mx: isMobile ? 0 : 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: isMobile ? 'flex-start' : 'center',
            px: isMobile ? 2 : 4,
            pt: 0,
            pb: isMobile ? 12 : 0,
            height: isMobile ? '100%' : '70vh', // changed from '100vh' to '100%' for mobile
            bgcolor: '#f3f4f6',
            borderRadius: 2,
            boxShadow: 2,
            overflow: 'auto',
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'center',
            justifyContent: isMobile ? 'flex-start' : 'center',
            width: '100%',
            flex: 1,
          }}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', justifyContent: 'center' }}>
              <Typography variant="h5" sx={{ textAlign: isMobile ? 'center' : 'left', mt: 2, mb: 2 }}>
                {slide.content}
              </Typography>
              {slide.paragraph && (
                <Typography variant="body1" sx={{ textAlign: isMobile ? 'center' : 'left', mb: 2, color: '#444' }}>
                  {slide.paragraph}
                </Typography>
              )}
              {slide.bullets && slide.bullets.length > 0 && (
                <Box component="ul" sx={{ textAlign: isMobile ? 'left' : 'left', mb: 4, maxWidth: 500, px: isMobile ? 2 : 0 }}>
                  {slide.bullets.map((b, i) => (
                    <li key={i} style={{ marginLeft: 24, marginBottom: 8, fontSize: isMobile ? '1rem' : '1.1rem' }}>{b}</li>
                  ))}
                </Box>
              )}
              {slide.media && (
                <Box sx={{ mb: 2 }}>{slide.media}</Box>
              )}
            </Box>
            {slide.lottie && (
              <Box sx={{ width: 150, ml: isMobile ? 0 : 4, mt: isMobile ? 2 : 0, alignSelf: 'center', flexShrink: 0 }}>
                <LottieAnimation animationData={slide.lottie} loop={true} style={{ width: 150, height: 'auto' }} />
              </Box>
            )}
          </Box>
          {/* Navigation buttons bottom center */}
          <Stack direction="row" spacing={2} sx={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
            <Tooltip title="Previous Slide" placement="top" arrow>
              <span>
                <Button onClick={() => handleNav('prev')} disabled={index === 0} size="small" variant="outlined" sx={{ minWidth: 32, minHeight: 32, p: 0.5, opacity: 0.7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowBackIcon fontSize="small" />
                </Button>
              </span>
            </Tooltip>
            {index < studySlides.length - 1 ? (
              <Tooltip title="Next Slide" placement="top" arrow>
                <span>
                  <Button onClick={() => handleNav('next')} disabled={index === studySlides.length - 1} size="small" variant="outlined" sx={{ minWidth: 32, minHeight: 32, p: 0.5, opacity: 0.7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowForwardIcon fontSize="small" />
                  </Button>
                </span>
              </Tooltip>
            ) : (
              <Tooltip title="Back to Home" placement="top" arrow>
                <span>
                  <Button onClick={() => navigate('/')} size="small" variant="contained" color="primary" sx={{ minWidth: 32, minHeight: 32, p: 0.5, opacity: 0.9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HomeIcon fontSize="small" />
                  </Button>
                </span>
              </Tooltip>
            )}
          </Stack>
        </Box>
      </Fade>
    </>
  );
}
