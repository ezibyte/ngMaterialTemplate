/**
 * Created by codesnooker on 3/30/16.
 */

(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['$q', '$mdToast', '$log'];


    function AdminController($q, $mdToast, $log) {
        var vm = this;

        activate();

        function activate() {
            var promises = [];
            return $q.all(promises).then(function () {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Admin Controller Loaded!')
                        .position('right bottom')
                        .hideDelay(3000)
                );

                $log.debug('Admin Activated');
            });
        }

    }

})();