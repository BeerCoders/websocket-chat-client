import "./../resources/styles/main.sass";

import {HomeComponent} from "./components/HomeComponent";

const appName = 'app';
const requirements = [
];

angular.module(appName, requirements)
    .component("home", new HomeComponent())
;

angular.bootstrap(document, ["app"], {
    strictDi: true
});