"use client";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 2, textAlign: "center", borderTop: "1px solid #ddd" }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Meu App
      </Typography>
    </Box>
  );
}
