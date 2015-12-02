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
	document.body.scrollTop = document.documentElement.scrollTop = 0;

	$scope.selectUrl = 'img/select.png';
	$scope.dropUrl = 'img/drop.png'
	$scope.tooltipUrl = 'img/tooltip.png'
	$scope.canshow = 0;
	$scope.nextPage = 0;
	var tour;

	tour = new Shepherd.Tour({	
	  defaults: {
	    classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
	    showCancelLink: true,
	    // scrollTo: true
	  }
	});

	tour.addStep('first-step', {
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
	tour.addStep('second-step', {
	      title: 'YOU CAN ADD TITLES!',
	      text: 'Click back to go back a step, or next to go to the next step!',
	      attachTo: '#attach-one right',
	      // scrollTo: true,	
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
	tour.addStep('third-step', {
	      title: 'TWO',
	      text: 'This is a number 2',
	      attachTo: '#attach-two top',
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
	tour.addStep('fourth-step', {
	      title: 'THREE',
	      text: 'So many possibilities',
	      attachTo: '#attach-three left',
	      buttons: [
	        {
	          text: 'Back',
	          classes: 'shepherd-button-secondary',
	          action: tour.back
	        }, {
	          text: 'Exit',
				classes: 'shepherd-button-primary',
				action: function() {
					return tour.hide();
				}
	        }
	    ]
	});

	$scope.startTour = function() {
		$scope.canshow++;
		tour.start();
	};

	$scope.countUp = function() {
		$scope.nextPage++;
	}

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
		$scope.selectUrl = './img/select.png'
	}
	$scope.changeDropBack = function() {
		$scope.dropUrl = './img/drop.png'
	}
	$scope.changeTooltipBack = function() {
		$scope.tooltipUrl = './img/tooltip.png'
	}
});

myApp.controller('OneController', function($scope) {
	// $scope.$on('$includeContentLoaded', function() {
		console.log("hello");
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		Prism.highlightAll();
	// });
	// $rootScope.$on('$stateChangeSuccess', function() {
	  // document.body.scrollTop = document.documentElement.scrollTop = 0;
	// });
});

myApp.controller('TwoController', function($scope) {
	var tour;

	tour = new Shepherd.Tour({	
	  defaults: {
	    classes: 'shepherd-theme-arrows',
	  }
	});
	// console.log("sup");

	tour.addStep('example-step', {
		title: "Let's start creating a tour!!",
		text: 'This would help you get started with this application!',
		attachTo: '#redButton top'
	});

	// $(document).ready(function() {
	// 	tour.start();
	// });
	$scope.startTour = function() {
		tour.start();
	};
});

myApp.controller('ThreeController', function($scope) {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	Prism.highlightAll();
	
	var tour;
	tour = new Shepherd.Tour({
		defaults: {
			classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
			showCancelLink: true
		}
	});
	tour.addStep('start', {
		title: 'Adding another step with classes',
		text: 'you can add classes to change theme',
		attachTo: '#addstep right',
		classes: 'shepherd-theme-arrows',
		buttons: [
			{
				text: 'Next',
				action: tour.next
			}
		]
	});
	tour.addStep('second', {
		title: 'Lets try adding a step with 2 buttons',
		text: 'you can simply add buttons by inserting more inside the step button method',
		attachTo: '#addbutton bottom',
		classes: 'shepherd-theme-arrows',
		scrollTo: true,
		buttons: [
			{
				text: 'Back',
				classes: 'shepherd-button-secondary',
				action: tour.back
			},
			{
				text: 'Next',
				action: tour.next
			}
		]
	});
	tour.start();

});

myApp.controller('FourController', function($scope) {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
});



