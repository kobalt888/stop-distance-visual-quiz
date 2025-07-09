import { Box, BoxProps } from '@mui/material';

export default function QuizCard({ children, sx = {}, ...props }: BoxProps) {
  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 6,
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 1,
        boxShadow: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
