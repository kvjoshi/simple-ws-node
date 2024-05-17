import WebSocket , {WebSocketServer} from "ws";

const wss = new WebSocketServer({ port: 8080 });
try{
wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        console.log(`Received message => ${message}`);
        ws.send(`Hello, you sent => ${message}`);
    });
    ws.send("Hello, I am a WebSocket server");
    });
}
catch(err){
    console.log(err);
}
