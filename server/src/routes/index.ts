import * as Router from 'koa-router'
import restaurant from './restaurant.routes'

const router = new Router({ prefix: '/api' })

router.use(restaurant.routes())
  .use(restaurant.allowedMethods())

export default router
