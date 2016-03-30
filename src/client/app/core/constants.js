/**
 * Created by codesnooker on 3/27/16.
 */

/* global toastr:false, moment:false */
(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('moment', moment)
        .constant('api', 'http://localhost:9100');
})();
