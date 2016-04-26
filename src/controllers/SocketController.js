/**
 * This file is part of the conference II Forum Ekonomiczne package.
 *
 * (c) BeerCoders <contact@beercoders.pl>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class SocketController {

    constructor(socket, $scope) {
        this.socket = socket;
        this.scope = $scope;
        this.scope.messages = [
            {nick: "BeerCoders Chat", message: "welcome to the BeerCoders chat", time: new Date().toISOString()}
        ];
        this.message = null;
        this.nick = null;

        this.socket.on('online', function (data) {
            $scope.online = data;
        });

        this.socket.on('message', function (data) {
            $scope.messages.push({
                message: data.message,
                nick: data.nick,
                time: new Date().toISOString()
            });
        });
    }

    setNick(nick) {
        this.nick = nick;
        this.socket.emit('getOnline', {});
    }

    addMessage(message, nick) {
        this.scope.messages.push({
            message: message,
            nick: nick,
            time: new Date().toISOString()
        });
    }

    sentMessage() {
        if (this.message != null) {
            this.socket.emit('message', {
                message: this.message,
                nick: this.nick
            });
            this.addMessage(this.message,"Me")

            this.message = null;
        }
    }


}

SocketController.$inject = ['socket', '$scope'];
