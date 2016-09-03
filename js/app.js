angular.module('todoApp',[])

.controller('mainCtrl', function($scope, dataService){
	 dataService.getTasks(function(response){
			console.log(response.data);
			$scope.tasks = response.data;	
			});
	 $scope.deleteTask = function(task){
	 	dataService.deleteTask(task)
	 };

	 $scope.saveTask = function(task){
	 	dataService.saveTask(task)
	 };

	})
.service('dataService', function($http){
		this.getTasks = function(callback){
			$http.get('mock/tasks.json')
		.then(callback)
	};
	this.deleteTask=function(task){

	};

	this.saveTask= function(task){

	};
});
		


