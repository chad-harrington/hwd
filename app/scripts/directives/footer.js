'use strict';

angular.module('hwdApp')
.directive('footer', function () {
	return {
	  templateUrl: 'templates/footer.html',
	  restrict: 'E',
	  controller: 'FooterCtrl'
	};
});
