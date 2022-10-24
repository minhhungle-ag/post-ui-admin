import { Avatar, Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import dayjs from 'dayjs'
import React from 'react'

export function PostInfo({ avatar, author, createdAt }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Avatar src={avatar} alt={author} />

      <Box>
        <Typography variant="body1">{author}</Typography>
        <Typography variant="body2">{dayjs(createdAt).format('MMM DD, YYYY')}</Typography>
      </Box>
    </Stack>
  )
}
