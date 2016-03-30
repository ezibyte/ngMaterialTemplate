/**
 * Created by codesnooker on 3/30/16.
 */

(function () {

    'use strict';

    angular
        .module('app.dashboard')
        .run(appRun);


    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state : 'dashboard',
                config: {
                    url         : '/',
                    templateUrl : 'app/dashboard/dashboard.html',
                    controller  : 'DashboardController',
                    controllerAs: 'vm',
                    title       : 'Dashboard',
                    header_title: 'Dashboard',
                    settings    : {nav: 1, name: 'Dashboard', icon: 'dashboard'}
                }
            }
        ];
    }
})();
