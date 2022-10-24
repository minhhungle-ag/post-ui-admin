import { CircularProgress, Stack } from '@mui/material'
import React from 'react'

export function Loading(props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={9999}
    >
      <CircularProgress color="primary" />
      <CircularProgress color="primary" />
      <CircularProgress color="primary" />
    </Stack>
  )
}
