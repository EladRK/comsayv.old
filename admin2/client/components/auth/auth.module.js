'use strict';

angular.module('admin2App.auth', [
  'admin2App.constants',
  'admin2App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
