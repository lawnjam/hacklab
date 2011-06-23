
var poster= '\r\n' +
'          █  █       █                         █\r\n' +
'          █          █                         █\r\n' +
' ▄▄▄   ▄▄▄█  ▄ ▄ ▄▄  █▄▄▄  ▄   ▄  ▄ ▄▄▄   ▄▄▄  █ ▄▄▄\r\n' +
'█   █ █   █  █ █▀  █ █   █ █   █  █▀   █ █   █ █▀   █\r\n' +
'█▀▀▀▀ █   █  █ █   █ █   █ █   █  █      █   █ █    █\r\n' +
' ▀▀▀   ▀▀▀ ▀ ▀ ▀   ▀ ▀▀▀▀   ▀▀▀ ▀ ▀       ▀▀█  ▀    ▀\r\n' +
'                                          ▄▄▄█\r\n' +
'█                  █     █        █      █   █\r\n' +
'█                  █     █        █       ▀▀▀\r\n' +
'█ ▄▄▄   ▄▄▄    ▄▄▄ █ ▄▄  █  ▄▄▄   █▄▄▄\r\n' +
'█▀   █ █   █  █    ██    █ █   █  █   █\r\n' +
'█    █ █   █  █    █ █   █ █   █  █   █\r\n' +
'▀    ▀  ▀▀▀ ▀  ▀▀▀ ▀  ▀  ▀  ▀▀▀ ▀ ▀▀▀▀\r\n' +
'\r\n' +
'Edinburgh Hacklab is part of the worldwide movement of Hackerspaces -\r\n' +
'shared spaces for people who mess around with technology for fun.\r\n' +
'By creating a shared space to do this, we provide access to better\r\n' +
'facilities than we could each have at home, as well as opportunities to\r\n' +
'collaborate, learn, and socialise.\r\n' +
'\r\n' +
'Open nights every Tuesday from 7pm, all welcome.\r\n' +
'\r\n' +
'Studio S5 (buzzer #200)\r\n' +
'Out Of The Blue\r\n' +
'36 Dalmeny Street\r\n' +
'Edinburgh\r\n' +
'EH6 8RG\r\n' +
'\r\n' +
'www.edinburghhacklab.com  irc: #edinhacklab on freenode\r\n\r\n';

var net = require('net');

var server = net.createServer(function (socket) {
      socket.end(poster);
      console.log(socket.remoteAddress)
});

server.listen(1337, "127.0.0.1");
