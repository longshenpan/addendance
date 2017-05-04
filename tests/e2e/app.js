/**
 * app.js
 */

define(
    [
        'angular',
        'angularResource',
        'angularRoute',
        'controllers/index',
        'services/index'
    ], function (angular) {
        return angular.module('app', ['ngRoute', 'ngResource', 'controllers', 'services']);
    }
)