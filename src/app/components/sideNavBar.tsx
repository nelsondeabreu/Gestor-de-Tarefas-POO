"use client";
import { Drawer, List, ListItem, ListItemText, ListItemButton, Typography, Divider  } from "@mui/material";
import ButtonLogOut from "./ui/Button";
import { BookmarkAdd } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ my: 2, textAlign: "center" }}
      >
        <BookmarkAdd sx={{ fontSize: 40 }} /> 
        Minhas Tarefas
      </Typography>
      <Divider />
      <List
        sx={{ width: "100%", flexGrow: 1}}>
        {["Dashboard", "Tarefas", "Configurações"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <ButtonLogOut />
    </Drawer>
  );
}
