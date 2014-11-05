	// create the module and name it scotchApp
	var scotchApp = angular.module('portfolioApp', ['ngRoute','ngAnimate']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/projects', {
				templateUrl : 'pages/projects.html',
				controller  : 'projectsController'
			})
			

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
		scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		
	});

	scotchApp.controller('projectsController', function($scope) {
		$scope.projects = [{title: "twitter-analysis",desc: "Plots the frequency of hashtags related to a topic on twitter.", code: "https://github.com/saurabhmathur96/twitter-analysis"}]
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.contacts = ["saurabhmathur96@gmail.com", "saurabh.mathur2014@vit.ac.in"]
	});
