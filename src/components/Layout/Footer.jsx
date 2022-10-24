import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const socialListIcon = [
  {
    link: '',
    icon: <EmailIcon />,
  },
  {
    link: '',
    icon: <FacebookIcon />,
  },
  {
    link: '',
    icon: <InstagramIcon />,
  },
]

export function Footer(props) {
  return (
    <Box
      component="footer"
      color="inherit"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        '& a': {
          color: 'inherit',
          textDecoration: 'none',
        },
      }}
    >
      <Container>
        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ py: { xs: 2, md: 6 } }}
        >
          <Link to="/blog" style={{ margin: '16px 0' }}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <SouthAmericaIcon sx={{ fontSize: 58 }} />

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  On The Trail
                </Typography>

                <Typography variant="body1">My blog travel</Typography>
              </Box>
            </Stack>
          </Link>

          <Box sx={{ width: { xs: '100%', sm: 1 / 3 }, my: 2 }}>
            <Typography variant="body1" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur
              reprehenderit quasi iste amet alias dolor ducimus non obcaecati temporibus quibusdam
              eum. Illo unde nisi, voluptas harum quam at doloribus.
            </Typography>
          </Box>

          <Box sx={{ width: { xs: '100%', sm: 'auto' }, my: 2 }}>
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight="bold">
                Socials
              </Typography>

              <Stack direction="row" alignItems="center" spacing={1}>
                {socialListIcon.map((item, idx) => (
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ cursor: 'pointer' }}
                    key={idx}
                  >
                    {item.icon}
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Divider color="white" />

        <Stack justifyContent="center" alignItems="center" sx={{ py: 2 }}>
          <Typography variant="body2" textAlign="center">
            © {new Date().getFullYear()}{' '}
            <Box component="a" href="https://react-post-ui.vercel.app/">
              react-post-ui.vercel.app
            </Box>
            . Power by Minh Hung Le.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
