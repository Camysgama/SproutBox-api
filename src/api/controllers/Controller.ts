import { FastifyInstance } from "fastify"
import { createCheckout } from "../services/CheckoutService"
import { createData, getPlan, updatePlan } from "../services/StorageService"
import { $ref, CreateCheckoutRequest, CreateDataRequest, UpdateDataRequest } from "../../schemas/StorageSchema"

export async function Controller(route: FastifyInstance) {
    route.post<{Body: CreateCheckoutRequest}>('/checkout', {
        schema: {
            body: $ref("createCheckoutRequest")
        }
    }, (request, reply) => {
        return createCheckout(request.body, reply)
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

    route.get('/get-plan/:id', {}, (request, reply) => {
        const params = request.params as { id: string};
        return getPlan(params.id, reply);
    })
}