import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateDataRequest, UpdateDataRequest } from "../../schemas/StorageSchema";
import { Plans } from "../../enums/PlanEnum";

const client = new DynamoDBClient({
    credentials: process.env.AWS_ACCESS_KEY_ID ? {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
    } : undefined,
    region: "sa-east-1" 
})

const docClient = DynamoDBDocumentClient.from(client);

export async function createData(request: CreateDataRequest, reply: FastifyReply) {
    const command = new PutCommand({
        TableName: "sproutbox-data",
        Item: {
            id: request.id,
            SproutPlan: Plans.none,
            Username: request.username,
        }
    })

    const response = await docClient.send(command);
    return reply.send({
        responseCode: 200,
        id: request.id
    });
}

export async function updatePlan(request: UpdateDataRequest, reply: FastifyReply) {
    const command = new UpdateCommand({
        TableName: "sproutbox-data",
        Key: {
            id: request.id
        },
        UpdateExpression: "set SproutPlan = :p",
        ExpressionAttributeValues: {
            ":p": request.plan
        }
    });
    const response = await docClient.send(command);
    return reply.send(response);
}