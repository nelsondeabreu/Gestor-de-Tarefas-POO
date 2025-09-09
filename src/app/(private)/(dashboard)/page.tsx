"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DataTable from "@/app/components/ui/Table";
import DialogAddTarefa from "@/app/components/ui/Dialog";

export default function DashboardPage() {
  return (
    <>
      {/* Header com texto e botão */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h5" fontWeight="bold">
          Minhas Tarefas
        </Typography>
        <DialogAddTarefa />
      </Stack>

      {/* Tabela de tarefas */}
      <DataTable />
    </>
  );
}
