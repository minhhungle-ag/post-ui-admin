import { Box, Button, LinearProgress, Stack, Typography } from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/user";
import { Header } from "./Header";

import { Sidebar } from "./SideBar";

export function AdminLayout({ children }) {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const { isLoading, user } = useUser(userId);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (!token || !user) {
    navigate("/auth/login");
    return null;
  }

  if (user?.role !== "admin") {
    return (
      <Stack
        sx={{ width: "100%", height: "100vh" }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack spacing={2} sx={{ p: 3, px: 5 }} boxShadow={3}>
          <Typography variant="h5">Oop! You are not the admin!</Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            href="https://react-post-ui.vercel.app/"
          >
            Go to posts
          </Button>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              localStorage.setItem("token", "");
              navigate("/auth/login");
            }}
          >
            Logout
          </Button>
        </Stack>
      </Stack>
    );
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "240px 1fr",
        gridTemplateAreas: `"header header" "sidebar main"`,

        height: "100vh",
        maxHeight: "100vh",
        width: "100%",
      }}
    >
      <Box gridArea="header">
        <Header />
      </Box>

      <Box
        sx={{
          gridArea: "sidebar",
          borderRight: "1.5px solid",
          borderColor: "grey.300",
        }}
      >
        <Sidebar />
      </Box>

      <Box
        sx={{
          gridArea: "main",
          padding: 2,
          backgroundColor: "paper",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
