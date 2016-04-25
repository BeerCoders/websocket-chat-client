/**
 * This file is part of the conference II Forum Ekonomiczne package.
 *
 * (c) BeerCoders <contact@beercoders.pl>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

config.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];

export function config($stateProvider, $locationProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('main', {
            url: '/main',
            template: '<socket></socket>'
        });
}
