import React from 'react';
import { Box, Typography } from '../atoms';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SxProps, Theme } from '@mui/material/styles';

interface PageHeaderProps {
  title?: string;
  showHome?: boolean;
  homeLabel?: string;
  sx?: SxProps<Theme>;
}

export default function PageHeader({ title, showHome = true, homeLabel = 'Home', sx = {} }: PageHeaderProps) {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, ...sx }}>
      {showHome && (
        <IconButton
          aria-label="Back to Home"
          onClick={() => navigate('/')}
          size="large"
          sx={{ mr: 2 }}
        >
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>
      )}
      {title && (
        <Typography variant="h6" sx={{ flex: 1, fontWeight: 600 }}>
          {title}
        </Typography>
      )}
    </Box>
  );
}
