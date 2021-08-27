const app = require("express")();
const server = require("http").createServer(app);
const options = {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
};
const io = require("socket.io")(server, options);

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

io.on('connection', socket => {
    console.log('user connected', socket.id);
})

server.listen(9999, (err) => {
    if (err) throw Error(err);
    console.log('Server starts at 9999')
});
