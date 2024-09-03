import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod'

//exportado objeto para config de schema
const creditRequest = z.object({
    name: z.string().min(4, 'deve ter mais de 4 caracteres'),
    cpf: z.number(),
    paymentDate: z.date(),
    spendCreditAmount: z.number(),
    totalCreditAmount: z.number()
})

// exportado para manipulação dos parametros
export type CreditRequest = z.infer<typeof creditRequest>;

export const { schemas, $ref } = buildJsonSchemas({
    creditRequest,
})
