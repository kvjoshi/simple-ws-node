import WebSocket , {WebSocketServer} from "ws";

const wss = new WebSocketServer({ port: 8080,
    clientTracking: true,
    perMessageDeflate:true,

 });
try{
wss.on("connection", (ws) => {
    wss.clients.forEach((client) => {
        console.log(client);
    });
    ws.on("upgrade", (request, socket, head) => {
        console.log("upgrade");
    });
    ws.on("message", (message) => {
        console.log(`Received message => ${message}`);
        ws.send(`Hello, you sent => ${message}`);
    });
    ws.on("close", (reason) => {
        console.log("close" , reason);
    });
    ws.on("error", (err) => {
        console.log(err);
    });
    ws.on("unexpected-response", (request, response) => {
        console.log("unexpected-response", request, response);
    });

    ws.send("Hello, I am a WebSocket server");
    });
wss.on("wsClientError", (err) => {
        console.log("wsCLientError ",err);
    });
}
catch(err){
    console.log(err);
}
