//var io = require('socket.io')(80);
//TODO : npm install --save express@4.15.2
var app = require('express')();
var http = require('http').createServer(app);

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