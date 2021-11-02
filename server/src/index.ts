import fastify from 'fastify'

const app = fastify()

app.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

app.listen(3000, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.info(`server listening on ${address}`)
})
