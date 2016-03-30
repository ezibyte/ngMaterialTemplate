/**
 * Created by codesnooker on 3/29/16.
 */

(function () {
    'use strict';

    angular
        .module('app.layout')
        .service('SidebarService', SidebarService);


    SidebarService.$inject = ['$log', '$mdSidenav'];

    function SidebarService($log, $mdSidenav) {

        var vm = {};

        vm.title    = 'Test Title';
        vm.show     = show;
        vm.hide     = hide;
        vm.toggle   = toggle;
        vm.setTitle = setTitle;
        vm.isOpen   = isOpen;

        return vm;

        function getLeftSidebar() {
            return $mdSidenav('left');
        }

        function isOpen() {
            return getLeftSidebar().isOpen();
        }

        function show() {
            $log.debug('Show left sidebar');
            getLeftSidebar().show();
        }

        function hide() {
            $log.debug('Hide left sidebar');
            getLeftSidebar().hide();
        }

        function toggle() {
            $log.debug('Toggle left sidebar');
            getLeftSidebar()
                .toggle()
                .then(function () {
                    $log.debug('toggle sidebar is done');
                });
        }

        function setTitle(title) {
            vm.title = title;
            $log.debug('Updated title to: ', title);
        }
    }

})();
