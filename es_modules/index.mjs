import { Server } from "http";
import myHandler from "./handler.mjs";

const server = new Server();

const emit = server.emit;
server.emit = (...args) => {
    console.log(`event: ${args[0]}`);
    return emit.apply(server, args);
};

server.on("request", myHandler);

server.listen(3000);
