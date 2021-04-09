import * as Koa from 'koa'
import * as path from 'path'
import * as serve from 'koa-static'
import * as helmet from 'koa-helmet'
import * as logger from 'koa-logger'
import * as cors from '@koa/cors'
import * as bodyParser from 'koa-bodyparser'
import { StatusCodes } from 'http-status-codes'

import router from './routes'

const app: Koa = new Koa()
const publicPath: string = path.resolve(__dirname, '../../client/build')

// Middleware
app.use(helmet())
app.use(bodyParser())
app.use(logger())
app.use(cors())

app.use(serve(publicPath))

// Routes
app.use(router.routes())
  .use(router.allowedMethods())

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.statusCode ?? error.status ?? StatusCodes.INTERNAL_SERVER_ERROR
    ctx.body = { error: { ...error, status: ctx.status } }

    ctx.app.emit('error', error, ctx)
  }
})

app.on('error', console.error)

export default app
