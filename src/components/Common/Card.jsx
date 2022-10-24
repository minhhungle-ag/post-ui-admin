import { Box, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { DEFAULT_THUMBNAIL } from '../../constants/common'
import { truncateText } from '../../utils/common'
import { PostInfo } from './PostInfo'

export function Card({ title, short_description, imageUrl, author, createdAt, avatar, action }) {
  return (
    <Box
      boxShadow={3}
      sx={{
        borderRadius: '4px',

        cursor: 'pointer',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: (theme) => theme.shadows[10],
        },
      }}
    >
      <Box position="relative" height={0} paddingTop="56.25%">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          component="img"
          width="100%"
          height="100%"
          src={imageUrl || DEFAULT_THUMBNAIL}
          sx={{ objectFit: 'cover' }}
          onError={(event) => (event.target.src = DEFAULT_THUMBNAIL)}
        />
      </Box>

      <Stack spacing={2} sx={{ p: 2 }}>
        <PostInfo author={author} avatar={avatar} createdAt={createdAt} />

        <Divider />

        <Typography variant="body1" fontWeight={500}>
          {truncateText(title, 30)}
        </Typography>

        <Typography minHeight={60} variant="body2" sx={{ flexGrow: 1 }}>
          {truncateText(short_description, 80)}
        </Typography>

        {action}
      </Stack>
    </Box>
  )
}
