//var io = require('socket.io')(80);
//TODO : npm install --save express@4.15.2
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/home/', (req, res) => {
    res.send('<h1>Hello world to the home</h1>');
});

app.get('/style.css', (req, res) => {
    res.send(__dirname + '/style.css');
});

http.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

io.on('connection', (socket) => {
    console.log(`New Connection`);
    console.log(`=> ${socket}`);

    socket.on('disconnect', () => {
        console.log('User disconnected');
        console.log(`<= ${socket}`);
    });
});