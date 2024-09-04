import { FastifyInstance, FastifyRequest } from "fastify"
import { createCheckout, getAllCredit } from "../services/CheckoutService"
import { createData, updatePlan } from "../services/StorageService"
import { $ref, CreateDataRequest, UpdateDataRequest } from "../../schemas/StorageSchema"

export async function Controller(route: FastifyInstance) {
    route.post('/checkout', {
    }, (request, reply) => {
        return createCheckout(request, reply)
    })

    route.post<{Body: CreateDataRequest}>('/create-data', {
        schema: {
            body: $ref("createDataRequest"),
        }
    }, (request, reply) => {
        return createData(request.body, reply)
    })

    route.post<{Body: UpdateDataRequest}>('/update-plan', {
        schema: {
            body: $ref("updateDataRequest"),
        }
    }, (request, reply) => {
        return updatePlan(request.body, reply)
    })
}