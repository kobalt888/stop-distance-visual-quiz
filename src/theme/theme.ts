import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f7fafc',
    },
    primary: {
      main: '#2563eb',
      dark: '#1d4ed8',
      contrastText: '#fff',
    },
    text: {
      primary: '#222',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    h3: {
      color: '#222',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '24px',
    },
    h4: {
      color: '#555',
      textAlign: 'center',
      marginBottom: '24px',
    },
    caption: {
      color: '#222',
      fontSize: '0.8rem',
    },
    body1: {
      color: '#444',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          padding: '12px 32px',
          borderRadius: 8,
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: '#2563eb',
          '&:hover': {
            backgroundColor: '#1d4ed8',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f7fafc',
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
        },
      },
    },
  },
});

export default theme;
