export class HomeController {
    constructor(mySocket) {
        this.messages = [];
        this.message = null;
        this.nick = null;
        this.socket = require('socket.io-client')('http://chat.beercoders.pl:3000');

        socket.on('message', function(data) {
            addMessage(data['message'], data['nick'], new Date().toISOString());
        });
    }

    setNick(nick) {
        this.nick = nick;
        socket.emit('setNick', this.nick);
    }

    addMessage(msg, nick, time) {
        this.messages.push({
            message: msg,
            nick: nick,
            time: time
        });
    }

    sentMessage() {
        if (this.message != null) {
            socket.emit('message', {
                message: this.message,
                nick: this.nick
            });
            this.addMessage(this.message, "Me", new Date().toISOString());
            this.message = null;
        }
    }
}

HomeController.$inject = [
 'io'
];