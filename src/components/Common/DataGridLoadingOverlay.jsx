import { Box } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import { GridOverlay } from '@mui/x-data-grid'
import * as React from 'react'

export function DataGridLoadingOverlay() {
  return (
    <GridOverlay>
      <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </Box>
    </GridOverlay>
  )
}
