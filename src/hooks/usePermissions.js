import { useUser } from './user'

export const roles = {
  USER: 'user',
  ADMIN: 'admin',
}

export function usePermissions() {
  const userId = localStorage.getItem('userId')
  const { user } = useUser(userId)
  const userRole = user?.role.toUpperCase()

  return {
    isAdmin: userRole === roles.ADMIN,
    isUser: userRole === roles.USER,
    permission: userRole,
  }
}
