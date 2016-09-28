require('angular')

var app = angular.module('app', [])

app.controller('MainController', function($scope) {
	$scope.message = 'Angular Works! This is work in angular with using gulp'
})
