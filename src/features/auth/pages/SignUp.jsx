import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/auth";
import { SignUpForm } from "../components/SignUpForm";

export function SignUp(props) {
  const navigate = useNavigate();
  const { signUpMutation } = useAuth();

  async function handleFormSubmit(formValues) {
    try {
      await signUpMutation.mutateAsync(formValues).then((response) => {
        if (response && response.data) {
          toast.success("Sign up success");
          navigate("/auth/login");

          return;
        }

        toast.error("Sign up failed");
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
            Sign Up
          </Typography>

          <Stack direction="row" alignItems="center" justifyContent="center">
            <Box boxShadow={2} sx={{ width: { xs: "100%", md: 1 / 2 }, p: 3 }}>
              <SignUpForm
                onFormSubmit={handleFormSubmit}
                onLogin={() => navigate("/auth/login")}
              />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
