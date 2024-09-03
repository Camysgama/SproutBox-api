import { BuildServer } from "./server";

const server = BuildServer()

async function run() {
    try {
        await server.listen({ port: 3333 });
        console.log("Listening on port 3333");
    } catch (e) {
        console.log("Error: " + e);
        process.exit(1);
    }
}

run();