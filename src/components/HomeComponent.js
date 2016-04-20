import {HomeController} from "./../controllers/HomeController";

export class HomeComponent {
    constructor() {
        this.template = require('./../views/home.html');
        this.controller = HomeController;
    }
}