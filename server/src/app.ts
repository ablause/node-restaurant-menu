import * as Koa from 'koa'
import * as path from 'path'
import * as serve from 'koa-static'
import { StatusCodes } from 'http-status-codes'

import { ICustomAppState, ICustomAppContext } from './interfaces'

import router from './routes/router'
import baseMiddlewares from './middlewares/baseMiddlewares'

const app: Koa = new Koa<ICustomAppState, ICustomAppContext>()
const publicPath: string = path.resolve(__dirname, '../../client/build')

// Middleware
baseMiddlewares(app)

app.use(serve(publicPath))

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

// Routes
app.use(router.routes())
  .use(router.allowedMethods())

export default app
