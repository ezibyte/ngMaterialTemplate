/**
 * Created by codesnooker on 3/30/16.
 */

(function () {
    'use strict';

    angular
        .module('app.admin')
        .run(appRun);


    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state : 'admin',
                config: {
                    url         : '/admin',
                    templateUrl : 'app/admin/admin.html',
                    controller  : 'AdminController',
                    controllerAs: 'vm',
                    title       : 'Admin',
                    settings    : {nav: 2, name: 'Admin', icon: 'domain'}
                }
            }
        ];
    }

})();