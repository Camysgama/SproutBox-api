import { FastifyReply, FastifyRequest } from "fastify";
import Stripe from "stripe";
import { CreateCheckoutRequest } from "../../schemas/StorageSchema";
import { Plans } from "../../enums/PlanEnum";

const stripe = new Stripe('sk_test_51PtHWFRuVuAglHKw986TZNEPk9Nka3PiQITPtr5dIL17FVSG9jqZaoSLnhjzYRZJ5vpM6ayjNcH97JPVx63Y0HKt004XCYsi6l')

const domain = 'https://sproutbox.vercel.app'

export async function createCheckout(request: CreateCheckoutRequest, response: FastifyReply){
  let plan = "";
  switch(request.plan) {
    case Plans.basic:   
      plan = "price_1PtHmTRuVuAglHKwkhbqpK8e";   
      break;
    case Plans.intermediate: 
      plan = "price_1PvTdGRuVuAglHKwG5jm8HaU";
      break;
    case Plans.advanced:
      plan = "price_1PvTeQRuVuAglHKwqyibmjqP";
      break;
  }

  const checkout = await stripe.checkout.sessions.create({
    locale: "pt-BR",
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: ["BR"],
    },
    line_items: [
        {
          price: plan,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${domain}/checkout-success?plan=${request.plan}`,
      cancel_url: `${domain}/checkout-error`,
      phone_number_collection: {
        enabled: true,
      },
  })

  return response.send({ url: checkout.url })
}