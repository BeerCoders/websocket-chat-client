

export class HomeController {
    constructor(socketio) {
        this.messages = [];
        this.message = "test";
        this.nick = "test";
        this.socket = socketio;


        this.sockets.on('connect', function () {
           console.log("Connected");
        });

        this.sockets.on('message', function(data) {
            this.addMessage(data['message'], data['nick'], new Date().toISOString());
        });
    }

    setNick(nick) {
        this.nick = nick;
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
            this.socket.emit('message', {
                message: this.message,
                nick: this.nick
            });
            this.addMessage(this.message, "Me", new Date().toISOString());
            this.message = null;
        }
    }
}

HomeController.$inject = [
 'socketio'
];