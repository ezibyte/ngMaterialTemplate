/**
 * Created by codesnooker on 3/30/16.
 */

(function () {
    'use strict';

    var core = angular.module('app.core');


    var config = {
        appTitle: 'Angular Material Template'
    };

    core.value('config', config);
    core.config(configure);

    configure.$inject = ['routerHelperProvider'];

    /* @ngInject */
    function configure(routerHelperProvider) {
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
    }

})();
