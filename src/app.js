/**
 * This file is part of the conference II Forum Ekonomiczne package.
 *
 * (c) BeerCoders <contact@beercoders.pl>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import "./../resources/styles/main.sass";
import {config as routesConfig} from "./configs/routes";
import {SocketComponent} from "./components/SocketComponent";

const appName = 'app';
const requirements = [
    'ui.router',
    'btford.socket-io'
];

angular.module(appName, requirements)
    .component("socket", new SocketComponent())
    .config(routesConfig)
    .factory('socket', ['socketFactory', (socketFactory) => {
        let myIoSocket = io.connect('http://chat.beercoders.pl:3700');

        let socket = socketFactory({
            ioSocket: myIoSocket
        });

        return socket;
    }])
    .directive('scrollBottom', function () {
        return {
            scope: {
                scrollBottom: "="
            },
            link: function (scope, element) {
                scope.$watchCollection('scrollBottom', function (newValue) {
                    if (newValue)
                    {
                        $(element).scrollTop($(element)[0].scrollHeight);
                    }
                });
            }
        }
    })
;

angular.bootstrap(document, ["app"], {
    strictDi: true
});
