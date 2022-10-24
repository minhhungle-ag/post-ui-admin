import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/auth";
import { LoginForm } from "../components/LoginForm";

export function Login(props) {
  const { loginMutation } = useAuth();
  const navigate = useNavigate();

  async function handleFormSubmit(formValues) {
    try {
      await loginMutation.mutateAsync(formValues).then((response) => {
        if (response && response.data) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", response.data.userId);

          toast.success("Login success");
          navigate("/");

          return;
        }

        toast.error("Login failed");
      });
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  }

  return (
    <Box>
      <Container>
        <Box sx={{ py: 8 }}>
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={500}
            sx={{ mb: { xs: 2, md: 6 } }}
          >
            Login
          </Typography>

          <Stack direction="row" alignItems="center" justifyContent="center">
            <Box boxShadow={3} sx={{ width: { xs: "100%", md: 1 / 2 }, p: 3 }}>
              <LoginForm
                onFormSubmit={handleFormSubmit}
                onSignUp={() => navigate("/auth/signup")}
              />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
