import * as Koa from 'koa'
import * as Router from 'koa-router'

const router: Router = new Router({ prefix: '/restaurants' })

router.get('/', (ctx: Koa.Context) => {
  ctx.body = 'GET ALL'
})

router.post('/', (ctx: Koa.Context) => {
  ctx.body = 'POST'
})

router.get('/:restaurant_name', (ctx: Koa.Context) => {
  ctx.body = 'GET SINGLE'
})

router.get('/:restaurant_id', (ctx: Koa.Context) => {
  ctx.body = 'GET SINGLE'
})

router.delete('/:restaurant_id', (ctx: Koa.Context) => {
  ctx.body = 'DELETE'
})

router.patch('/:restaurant_id', (ctx: Koa.Context) => {
  ctx.body = 'PATCH'
})

export default router
