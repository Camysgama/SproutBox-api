import fastify from 'fastify';
import { Controller } from './api/controllers/Controller';
import { schemas } from './schemas/StorageSchema';
import fastifyCors from '@fastify/cors';


export function BuildServer() {
    const server = fastify()

    server.register(require('@fastify/formbody'))

    for (const schema of schemas) {
        server.addSchema(schema)
    }

    //Registrar a controller no service, para ter acesso ao server na controller
    server.register(Controller)

    server.register(fastifyCors, {
        origin: '*',
        methods: ['GET', 'POST']
    })

    return server;
}