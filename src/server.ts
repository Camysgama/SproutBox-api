import fastify from 'fastify';
import { Controller } from './api/controllers/Controller';
import { schemas } from './schemas/StorageSchema';
import fastifyCors from '@fastify/cors';

const app = fastify()

app.register(require('@fastify/formbody'))

for (const schema of schemas) {
    app.addSchema(schema)
}

//Registrar a controller no service, para ter acesso ao app na controller
app.register(Controller)

app.register(fastifyCors, {
    origin: '*',
    methods: ['GET', 'POST']
})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
    console.log("Server running on port " + (process.env.PORT ?? "3333"))
})