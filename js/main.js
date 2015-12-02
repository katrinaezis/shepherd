var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
	$stateProvider
		.state('intro', {
			url: '/intro',
			templateUrl: 'templates/intro.html',
			controller: 'IntroController'
		})
		.state('one', {
			url: '/one',
			templateUrl: 'templates/one.html',
			controller: 'OneController'
		})
		.state('two', {
			url: '/two',
			templateUrl: 'templates/two.html',
			controller: 'TwoController'
		})
		.state('three', {
			url: '/three',
			templateUrl: 'templates/three.html',
			controller: 'ThreeController'
		})
		.state('four', {
			url: '/four',
			templateUrl: 'templates/four.html',
			controller: 'FourController'
		});

});

myApp.controller('IntroController', function($scope) {
	$scope.selectUrl = 'img/select.png';
	$scope.dropUrl = 'img/drop.png'
	$scope.tooltipUrl = 'img/tooltip.png'
	$scope.canshow = 0;
	console.log($scope.canshow)
	var tour;

	tour = new Shepherd.Tour({	
	  defaults: {
	    classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
	    showCancelLink: true,
	    scrollTo: true
	  }
	});

	tour.addStep('example-step', {
		text: ["I'm a Shepherd tour guide! I can do more than just pop up on the page.  Click the next button!"],
		attachTo: '.btn-large top',
		classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
		buttons: [
			{
				text: 'Exit',
				classes: 'shepherd-button-secondary',
				action: function() {
					return tour.hide();
				}
			}, {
				text: 'Next',
				action: tour.next,
				classes: 'shepherd-button-example-primary',
			}
		]
	});
	tour.addStep('including', {
	      title: 'You can add titles',
	      text: 'Including Shepherd is easy! Just include shepherd.js, and a Shepherd theme file.',
	      attachTo: '#thing bottom',
	      buttons: [
	        {
	          text: 'Back',
	          classes: 'shepherd-button-secondary',
	          action: tour.back
	        }, {
	          text: 'Next',
	          action: tour.next
	        }
	      ]
	    });

	$scope.startTour = function() {
		$scope.canshow++;
		tour.start();
	};

	$scope.changeSelectGif = function() {
		$scope.selectUrl = "./img/select.gif";
		console.log('hello')
	}
	$scope.changeDropGif = function() {
		$scope.dropUrl = './img/drop.gif'
	}
	$scope.changeTooltipGif = function() {
		$scope.tooltipUrl = './img/tooltip.gif'
	}


	$scope.changeSelectBack = function() {
		$scope.selectUrl = 'img/select.png'
	}
	$scope.changeDropBack = function() {
		$scope.dropUrl = 'img/drop.png'
	}
	$scope.changeTooltipBack = function() {
		$scope.tooltipUrl = 'img/tooltip.png'
	}
});

myApp.controller('OneController', function($scope) {
	// $scope.$on('$includeContentLoaded', function() {
		console.log("hello");
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		Prism.highlightAll();
	// });
	// $rootScope.$on('$stateChangeSuccess', function() {
	//    document.body.scrollTop = document.documentElement.scrollTop = 0;
	// });
});

myApp.controller('TwoController', function($scope) {
});

myApp.controller('ThreeController', function($scope) {
});

myApp.controller('FourController', function($scope) {
});



