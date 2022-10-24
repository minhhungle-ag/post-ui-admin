import AccountCircle from '@mui/icons-material/AccountCircle'
import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export function Sidebar() {
  // const { hasPermission } = usePermissions()

  const menuList = [{ label: 'Users', path: '/admin/users', icon: <AccountCircle /> }]

  return (
    <Box
      sx={{
        p: 2,

        '.active > div': {
          color: 'primary.main',
          backgroundColor: 'grey.100',
        },
      }}
    >
      {menuList.map((menu, idx) => (
        <NavLink
          key={idx}
          to={menu.path}
          className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: 'none' }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',

              mb: 0.5,
              p: 1,
              borderRadius: '8px',

              color: 'grey.500',
              backgroundColor: 'white',

              '&:hover': {
                backgroundColor: 'grey.50',
              },
            }}
          >
            {menu.icon}

            <Box ml={1.5}>{menu.label}</Box>
          </Box>
        </NavLink>
      ))}
    </Box>
  )
}
