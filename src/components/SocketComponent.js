/**
 * This file is part of the conference II Forum Ekonomiczne package.
 *
 * (c) BeerCoders <contact@beercoders.pl>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {SocketController} from "./../controllers/SocketController";

export class SocketComponent {
    constructor() {
        this.template = require('./../views/socket.html');
        this.controller = SocketController;
    }
}