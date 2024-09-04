import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod'
import { Plans } from '../enums/PlanEnum';

const baseRequest = {
    id: z.string().min(4)
}

const createDataRequest = z.object({
    ...baseRequest,
    username: z.string().optional()
})

const updateDataRequest = z.object({
    ...baseRequest,
    plan: z.nativeEnum(Plans)
});

export type CreateDataRequest = z.infer<typeof createDataRequest>;
export type UpdateDataRequest = z.infer<typeof updateDataRequest>;

export const { schemas, $ref } = buildJsonSchemas({
    createDataRequest,
    updateDataRequest
})