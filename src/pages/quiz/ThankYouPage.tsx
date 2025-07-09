import { Box, Button, Typography } from '@mui/material';
import PageHeader from '../../components/organisms/PageHeader';

export default function ThankYouPage() {
  return (
    <>
      <PageHeader title="Quiz" />
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 6, p: 3, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <Typography variant="h3" gutterBottom>
          Thank You!
        </Typography>
        <Typography variant="body1" gutterBottom>
          I hope you found this study module half as fun as I did making it.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            href="https://www.linkedin.com/in/alfredhanson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
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
