"use client";
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { handleLogout } from '@/app/hooks/useAuth';

export default function ButtonLogOut() {
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={handleLogoutClick}
        variant="contained"
        sx={{ mb: 2, width: '100%', borderRadius: 0, padding: 2 }}
      >
        Sair
      </Button>
    </Stack>
  );
}