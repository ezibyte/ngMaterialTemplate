/**
 * Created by codesnooker on 3/29/16.
 */

(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$log', 'SidebarService', '$mdToast', 'routerHelper'];

    function ShellController($log, SidebarService, $mdToast, routerHelper) {
        var vm    = this;
        vm.toggle = toggle;
        vm.isOpen = isOpen;
        vm.like   = like;

        function activate() {
            $log.debug('Activated Shell');
        }

        function toggle() {
            SidebarService.toggle();
        }

        function isOpen() {
            return SidebarService.isOpen();
        }

        function like() {
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Like Success!')
                    .position('right bottom')
                    .hideDelay(3000)
            );
        }

        activate();
    }


})();