/**
 * Created by codesnooker on 3/30/16.
 */

(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', '$mdToast', '$log'];


    function DashboardController($q, $mdToast, $log) {
        var vm       = this;

        activate();

        function activate() {
            var promises = [];
            return $q.all(promises).then(function () {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Dashboard Controller Loaded!')
                        .position('right bottom')
                        .hideDelay(3000)
                );

                $log.debug('Dashboard Activated');
            });
        }

    }


})();