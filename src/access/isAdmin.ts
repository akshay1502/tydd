import { User } from '@/payload-types'
import { Access } from 'payload'

export const isAdmin: Access<User> = ({ req: { user } }) => {
  return Boolean(user?.role?.includes('admin'))
}

export const isAdminOrEditor: Access<User> = ({ req: { user } }) => {
  return Boolean(user?.role && ['admin', 'editor'].includes(user.role))
}
