import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AvatarField } from "../../../components/FormField/AvatarField";
import { InputField } from "../../../components/FormField/InputField";
import { SelectField } from "../../../components/FormField/SelectField";

const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const schema = yup.object({
  fullname: yup.string().required(),
  email: yup.string().required().matches(emailRegex),
  password: yup.string().required(),
  avatar: yup.string().required(),
  confirm_password: yup
    .string()
    .required("Please re-enter your password ")
    .oneOf([yup.ref("password"), null], "Password dose not math"),
});

export function SignUpForm({ onFormSubmit, onLogin }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullname: "",

      description: "",
      avatar: "",
      gender: "male",
      role: "user",
    },

    resolver: yupResolver(schema),
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
      <AvatarField control={control} name="avatar" width={80} />

      <InputField control={control} name="fullname" label="Full name" />

      <SelectField
        control={control}
        name="gender"
        label="Gender"
        optionList={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
      />

      <SelectField
        control={control}
        name="role"
        label="Role"
        optionList={[
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" },
        ]}
      />

      <InputField control={control} name="email" label="Email" />

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

      <InputField
        control={control}
        name="confirm_password"
        label="Confirm password"
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

      <InputField
        control={control}
        name="description"
        label="description"
        multiline
        row={100}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        color="primary"
        sx={{ mt: 2 }}
      >
        Sign up
      </Button>

      <Button
        variant="outlined"
        fullWidth
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => onLogin?.()}
      >
        Login
      </Button>
    </Box>
  );
}
