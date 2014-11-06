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
		$scope.projects = [{title: "twitter-analysis", description: "Plots the frequency of hashtags related to a topic on twitter.", link_to_code: "https://github.com/saurabhmathur96/twitter-analysis"},
		{title: "CBSE-Results-Scraper", description: "Gets the results of a range of roll numbers from the CBSE website.", link_to_code: "https://github.com/saurabhmathur96/CBSE-Results-Scraper"},
		{title: "PhoneBook", description: "A console application for storage, retrieval and modification of telephone records using C++.", link_to_code: "https://github.com/saurabhmathur96/PhoneBook"},
		{title: "saurabhmathur96.github.io", description: "This website, designed with Angular.js.", link_to_code: "https://github.com/saurabhmathur96/saurabhmathur96.github.io"},
		{title: "Sieve-of-Eratosthenes", description: "A prime number generator made in C.", link_to_code: "https://github.com/saurabhmathur96/Sieve-of-Eratosthenes"}
		]
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.contacts = ["saurabhmathur96@gmail.com", "saurabh.mathur2014@vit.ac.in"]
	});
