'use strict';

angular.module('hwdApp')
.directive('hwdFooter', function () {
	return {
	  templateUrl: 'templates/footer.html',
	  restrict: 'A',
	  replace: true,
	  controller: 'FooterCtrl'
	};
});
