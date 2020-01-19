
import express from 'express';
import cors from 'cors';


let port = 8000;
let app = express();


app.use(cors());

app.listen(port, "0.0.0.0", console.info("Server running, listening on port ", port));

app.get('/prediction',async (req,res)=>{
    console.log("prediction");
    res.send("test");
});

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (client) => { 
    console.log("testsetes");
    client.on("test", (data) => {
        console.log(data);
    })
});
io.listen(3000);