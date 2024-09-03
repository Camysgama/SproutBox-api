import { FastifyInstance } from "fastify"
import { createCheckout, getAllCredit } from "../services/CheckoutService"
import { createData, updatePlan } from "../services/StorageService"

export async function Controller(route: FastifyInstance) {
    route.get('/credit', () => {
        return getAllCredit()
    })

    // route.post<{Body: CreditRequest}>('/checkout',
    // {
    //     schema: {
    //         body: $ref("creditRequest"),
    //         response: {
    //             201: $ref("creditRequest"),
    //         }
    //     }
    // },
    // (request) => {
    //     return createCredit(request.body)
    // })

    route.post('/checkout', {
    }, (request, reply) => {
        return createCheckout(request, reply)
    })

    route.post('/create-data', {
    }, (request, reply) => {
        return updatePlan(request, reply)
    })
}