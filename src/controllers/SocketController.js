/**
 * This file is part of the conference II Forum Ekonomiczne package.
 *
 * (c) BeerCoders <contact@beercoders.pl>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class SocketController {

    constructor(socket) {
        this.socket = socket;
        this.socket.on('connect', function () {
           console.log("Connected");
        });
    }

    
}

SocketController.$inject = ['socket'];
