import { Avatar, Box, Container, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export function Banner(props) {
  return (
    <Box position="relative" height={0} paddingTop="56.25%">
      <Box position="absolute" top={0} left={0} right={0} bottom={0}>
        <video
          width="100%"
          height="100%"
          src="https://video.wixstatic.com/video/375882_9f1a8e8b364946f38b7eb05436e76503/1080p/mp4/file.mp4"
          autoPlay
          muted
          preload="auto"
          loop
        />
      </Box>

      <Box position="absolute" top={0} left={0} right={0} bottom={0}>
        <Container>
          <Box>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ display: 'inline-flex', p: 2, bgcolor: 'secondary.main', color: 'white' }}
              spacing={1}
            >
              <Avatar
                src="https://static.wixstatic.com/media/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg/v1/crop/x_1646,y_0,w_3950,h_3840/fill/w_144,h_140,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1145254743.jpg"
                sx={{ height: '100%', width: '100%', mb: 1 }}
              />

              <Typography variant="h6" textAlign="center" fontWeight={500} sx={{ mb: 0.5 }}>
                Hi, welcome!
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
