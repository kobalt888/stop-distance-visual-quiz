import { Box, Button, Typography } from '@mui/material';
import PageHeader from '../../components/organisms/PageHeader';
import { useMediaQuery, useTheme } from '@mui/material';

export default function ThankYouPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <PageHeader title="Quiz" />
      <Box sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: { xs: 0, sm: 6 },
        p: 2,
        bgcolor: '#f3f4f6',
        borderRadius: 1,
        boxShadow: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 3,
        height: 'auto',
        overflow: 'auto',
        justifyContent: 'flex-start',
      }}>
        <Typography variant="h3" gutterBottom>
          Thank You!
        </Typography>
        <Typography variant="body1" gutterBottom>
          I hope you found this study module half as fun as I did making it.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2, mb: 1, justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            href="https://www.linkedin.com/in/alfredhanson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="/"
          >
            Home
          </Button>
        </Box>
      </Box>
    </>
  );
}
