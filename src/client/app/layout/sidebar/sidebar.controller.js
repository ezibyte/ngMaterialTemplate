/**
 * Created by codesnooker on 3/29/16.
 */

(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$state', 'routerHelper', '$log', 'SidebarService'];

    /**
     *
     * @constructor
     */
    function SidebarController($state, routerHelper, $log, SidebarService) {
        var vm       = this;
        var states   = routerHelper.getStates();
        vm.title     = SidebarService.title;
        vm.isCurrent = isCurrent;
        vm.fired     = fired;

        function activate() {
            $log.debug('Activated Sidebar');
            SidebarService.setTitle('EziByte Technologies');
            getNavRoutes();
            $log.debug('Nav Routes: ', vm.navRoutes);
        }

        activate();

        function fired(stateName) {
            $log.debug('Fired button: ', stateName);
            $state.go(stateName);
        }

        function getNavRoutes() {
            vm.navRoutes = states.filter(function (r) {
                return r.settings && r.settings.nav;
            }).sort(function (r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var menuName = route.title;
            return $state.current.title.substr(0, menuName.length) === menuName ? 'ez-sidenav-list-current' : '';
        }
    }


})();