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
	// tour.start();
	var tour;

	tour = new Shepherd.Tour({	
	  defaults: {
	    classes: 'shepherd-theme-arrows',
	    scrollTo: true
	  }
	});

	tour.addStep('example-step', {
		title: 'Hi there!',
		text: 'This would help you get started with this application!',
		attachTo: '#shepherd-intro top',
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
				classes: 'shepherd-button-example-primary'
			}
		]
	});
});

myApp.controller('OneController', function($scope) {

});

myApp.controller('TwoController', function($scope) {
});

myApp.controller('ThreeController', function($scope) {
});

myApp.controller('FourController', function($scope) {
});



