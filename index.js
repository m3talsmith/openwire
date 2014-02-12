var connect = require('connect'),
    http    = require('http'),
    io      = require('socket.io');

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(connect.directory('public'))
  .use(function (request, response) {
    response.end("Hello. You shouldn't be seeing this. Tell your web master he's an idiot.");
   });

var server = http.createServer(app);

server.listen(1337);
io.listen(server);
