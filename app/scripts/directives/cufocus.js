'use strict';

angular.module('hwdApp')
.directive('cuFocus', function () {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, controller) {
			
			controller.$focused = false;

			element.bind('focus', function() {
				scope.$apply( function()	{ controller.$focused = true; } );
			}).bind('blur', function() {
				scope.$apply( function()	{ controller.$focused = false; } );
			});

		}
	};
});
