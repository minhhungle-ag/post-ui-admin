import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../../../components/FormField/InputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Stack } from "@mui/system";

const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const schema = yup.object({
  email: yup.string().required().matches(emailRegex),
  password: yup.string().required(),
});

export function LoginForm({ onFormSubmit, onSignUp }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: yupResolver(schema),
    mode: "all",
  });

  const handleClickShowPassword = () => {
    setShowPassword((x) => !x);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function handleFormSubmit(formValues) {
    onFormSubmit?.(formValues);
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack justifyContent="center" alignItems="center">
        <InputField control={control} name="email" label="Email" />
      </Stack>

      <InputField
        control={control}
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        color="primary"
        sx={{ mt: 2 }}
      >
        Login
      </Button>

      <Button
        variant="outlined"
        fullWidth
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => onSignUp?.()}
      >
        Sign up
      </Button>
    </Box>
  );
}
