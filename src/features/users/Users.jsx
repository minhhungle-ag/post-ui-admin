import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useUsers } from "../../hooks/users";
import { UsersFilter } from "./components/UserFilter";
import { UserList } from "./components/UserList";

export default function Users(props) {
  const [params, setParams] = useState({
    page: 1,
    limit: 6,
  });

  const { userList, pagination } = useUsers(params);

  function handleFilterChange(params) {
    setParams(params);
  }

  return (
    <Stack height="100%">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography component="h1" variant="h4">
          Users managements
        </Typography>
      </Stack>

      <Box sx={{ width: { xs: "100%", sm: 1 / 2, md: 1 / 4 }, mb: 3 }}>
        <UsersFilter params={params} onFilterChange={handleFilterChange} />
      </Box>

      <Box flexGrow={1}>
        <UserList data={userList || []} pagination={pagination} />
      </Box>
    </Stack>
  );
}
