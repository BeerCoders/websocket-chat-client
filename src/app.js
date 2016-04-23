import "./../resources/styles/main.sass";

import "socket.io-client";

import {HomeComponent} from "./components/HomeComponent";

const appName = 'app';
const requirements = [
];

angular.module(appName, requirements)
    .component("home", new HomeComponent())
    .factory('socketio', ['$rootScope', ($rootScope) => {
        let socket = io.connect("http://localhost:3700");

        return {
            on: (eventName, callback) => {
                socket.on(eventName, () => {
                   let args = arguments;
                    $rootScope.$apply(() => {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: (eventName, data, callback) => {
                socket.emit(eventName, data, () => {
                    let args = arguments;
                    $rootScope.$apply(() => {
                        callback.apply(socket, args);
                    });
                });
            }
        };
    }])
;

angular.bootstrap(document, ["app"], {
    strictDi: true
});