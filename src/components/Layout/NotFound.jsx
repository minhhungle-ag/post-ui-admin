import { Stack, Typography } from "@mui/material";
import React from "react";

export function NotFound(props) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "calc(100vh - 70px)" }}
    >
      <Typography variant="h5">404 | Page not found!</Typography>
    </Stack>
  );
}
