import type { DefaultContext } from 'koa'
import type { AuthenticateOptions } from 'passport'

import { User } from '@/models/user.model'

export interface ICustomAppContext extends DefaultContext {
  logout: () => void
  login: (user: User) => void
}
