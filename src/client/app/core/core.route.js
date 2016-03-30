/**
 * Created by codesnooker on 3/27/16.
 */

(function () {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);


    /* @ngInject */
    function appRun(routerHelper, $interval) {
        var otherwise = '/404';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state : '404',
                config: {
                    url        : '/404',
                    templateUrl: 'app/core/404.html',
                    title      : '404'
                }
            }
        ];
    }

})();
