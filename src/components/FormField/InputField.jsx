import { TextField } from '@mui/material'
import * as React from 'react'
import { useController } from 'react-hook-form'

export function InputField({
  name,
  control,
  label,
  multiline = false,
  rows = 5,
  InputProps,
  InputLabelProps,
  ...inputProps
}) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  })

  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      value={value || ''}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      label={label}
      variant="outlined"
      error={invalid}
      multiline={multiline}
      rows={rows}
      InputProps={InputProps}
      InputLabelProps={InputLabelProps}
      helperText={error?.message}
      inputProps={inputProps}
    />
  )
}
