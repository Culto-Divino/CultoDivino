export default defineEventHandler((event) => {
  deleteCookie(event, 'session')
  event.node.res.statusCode = 200
  event.node.res.end(JSON.stringify({ message: 'Successfully logged out!' }))
})
