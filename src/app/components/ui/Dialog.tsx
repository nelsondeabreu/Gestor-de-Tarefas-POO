'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import AddCircle from "@mui/icons-material/AddCircle";
import { FormControl, TextField } from '@mui/material';
import { AddTask } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<null, string | React.JSXElementConstructor<null>> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAddTarefa() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircle />}
        onClick={handleClickOpen}
      >
        Nova Tarefa
      </Button>

      <Dialog
        open={open}
        slots={{ transition: Transition }} // ✅ API nova
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle> <AddTask /> Adicionar Tarefa</DialogTitle>
        <DialogContent>
          <form>
            <FormControl fullWidth sx={{ gap: 2, mt: 2, width: 500 }}>
              <TextField fullWidth label="Título" id="titulo" />
              <TextField fullWidth label="Descrição" id="descricao" />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>Cancelar</Button>
          <Button color="success" variant="contained" onClick={handleClose}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
