import { FastifyReply, FastifyRequest } from "fastify";
import { Database } from "../../data/Database";
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51PtHWFRuVuAglHKw986TZNEPk9Nka3PiQITPtr5dIL17FVSG9jqZaoSLnhjzYRZJ5vpM6ayjNcH97JPVx63Y0HKt004XCYsi6l')

const domain = 'https://sproutbox.vercel.app/'
const database = new Database()

export function getAllCredit(){
    return database.getData()
}

export async function createCheckout(request: FastifyRequest, response: FastifyReply){
    const checkout = await stripe.checkout.sessions.create({
        line_items: [
            {
              price: 'price_1PtHmTRuVuAglHKwkhbqpK8e',
              quantity: 1,
            },
          ],
          mode: 'subscription',
          success_url: `${domain}?success=true`,
          cancel_url: `${domain}?canceled=true`,
    })
    console.log(checkout)
    return response.redirect(303, checkout.url ?? '')
}