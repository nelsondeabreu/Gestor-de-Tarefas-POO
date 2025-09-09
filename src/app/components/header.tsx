"use client";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main", padding: .5 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
          Meu Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
