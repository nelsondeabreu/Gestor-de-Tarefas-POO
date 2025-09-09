"use client";

import { Card, CardContent, Typography } from "@mui/material";

interface CustomCardProps {
  title: string;
  value: string | number;
}

export default function CustomCard({ title, value }: CustomCardProps) {
  return (
    <Card sx={{ minWidth: 200, borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
