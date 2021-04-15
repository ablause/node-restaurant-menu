import * as Koa from 'koa'
import * as helmet from 'koa-helmet'
import * as logger from 'koa-logger'
import * as cors from '@koa/cors'
import * as bodyParser from 'koa-bodyparser'
import * as passport from 'koa-passport'
import * as session from 'koa-session'

export default (app: Koa): void => {
  app.use(helmet())
  app.use(bodyParser())
  app.use(cors())

  app.use(logger())

  // auth
  app.use(session({}, app))
  app.use(passport.initialize())
  app.use(passport.session())
}
