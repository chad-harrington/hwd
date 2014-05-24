'use strict';

angular.module('hwdApp')
.controller('AboutCtrl', function ($scope, Skills, Education) {
	
	$scope.Chad = {
		skills: Skills.query(),
		education: Education.query()
	};
	
});
