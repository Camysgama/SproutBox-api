import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { FastifyReply, FastifyRequest } from "fastify";

const client = new DynamoDBClient({ region: "sa-east-1" })
const docClient = DynamoDBDocumentClient.from(client);

export async function createData(request: FastifyRequest, reply: FastifyReply) {
    const command = new PutCommand({
        TableName: "sproutbox-data",
        Item: {
            id: "test",
            plan: "test",
            username: "test"
        }
    })

    const response = await docClient.send(command);
    return reply.send(response);
}

export async function updatePlan(request: FastifyRequest, reply: FastifyReply) {
    const get = new GetCommand({
        TableName: "sproutbox-data",
        Key: {
            id: "test",
        }
    })
    const data = await docClient.send(get);
    // const command = new PutCommand({
    //     TableName: "sproutbox-data",
    //     Item: {
    //         id: "test",
    //         plan: "basic",
    //         username: "Camilly"
    //     }
    // })

    // const response = await docClient.send(command);
    return reply.send(data);
}