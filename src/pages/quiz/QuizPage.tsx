import { useState } from 'react';
import { Box, Typography, Button, Stack } from '../../components/atoms';
import { QuizQuestions, StoppingDistanceAnimation } from '.';
import { PageHeader } from '../../components/organisms';
import Fade from '@mui/material/Fade';
import { Link as RouterLink } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

interface QuizQuestion {
  id: number;
  type: 'default' | 'following-distance';
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  mph?: number;
  truckLength?: number;
  correctSeconds?: number;
}

export default function QuizPage() {
  const [index, setIndex] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [animationStep, setAnimationStep] = useState<number>(0); // 0: none, 1: perception, 2: reaction, 3: braking
  const question: QuizQuestion = QuizQuestions[index] as QuizQuestion;

  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  const handleSelect = (i: number): void => {
    setSelected(i);
    if (question.type === 'following-distance') {
      setShowAnimation(true);
      setTimeout(() => setAnimationStep(1), 450); // perception
      setTimeout(() => setAnimationStep(2), 1800); // perception
      setTimeout(() => setAnimationStep(3), 2700); // reaction
      setTimeout(() => setShowAnswer(true), 3600); // braking
    } else {
      setShowAnswer(true);
    }
  };

  const handleNext = (): void => {
    setSelected(null);
    setShowAnimation(false);
    setShowAnswer(false);
    setAnimationStep(0);
    // Delay index update to ensure state resets before next render
    setTimeout(() => {
      setIndex((i: number) => Math.min(i + 1, QuizQuestions.length - 1));
    }, 0);
  };

  return (
    <>
      <PageHeader title="Quiz" />
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 6, p: 3, bgcolor: '#f3f4f6', borderRadius: 1, boxShadow: 2, height: isMobile ? '100vh' : 'auto', overflowY: 'auto' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>{question.question}</Typography>
        <Stack spacing={2}>
          {question.options.map((opt, i) => (
            <Button
              key={i}
              variant={selected === i ? (i === question.answer ? 'contained' : 'outlined') : 'outlined'}
              color={showAnswer && i === question.answer ? 'success' : 'primary'}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              sx={{ textAlign: 'left', justifyContent: 'flex-start' }}
              fullWidth
            >
              {opt}
            </Button>
          ))}
        </Stack>
        {/* Show animation after selection for following-distance */}
        {question.type === 'following-distance' && selected !== null && (
          <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StoppingDistanceAnimation mph={question.mph!} step={animationStep} />
          </Box>
        )}
        {/* Fade in answer after animation (or immediately for default) */}
        <Fade in={showAnswer} timeout={{ enter: 500, exit: 0 }} unmountOnExit>
          <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="subtitle1" color={selected === question.answer ? 'success.main' : 'error.main'}>
              {selected === question.answer ? 'Correct!' : 'Incorrect.'}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>{question.explanation}</Typography>
            {index < QuizQuestions.length - 1 ? (
              <Button variant="contained" sx={{ mt: 2, alignSelf: 'center' }} onClick={handleNext}>Next Question</Button>
            ) : (
              <RouterLink to="/thank-you" style={{ textDecoration: 'none', alignSelf: 'center' }}>
                <Button variant="contained" sx={{ mt: 2 }}>
                  Finish
                </Button>
              </RouterLink>
            )}
          </Box>
        </Fade>
      </Box>
    </>
  );
}
