

angular.module('todoApp')

.controller('mainCtrl', function($scope, dataService){
	 $scope.addTask= function(){
	 	let task = {name:"This is a new task."};

	 	$scope.tasks.unshift(task);

	 };

	 dataService.getTasks(function(response){
			console.log(response.data);
			$scope.tasks = response.data;	
			});
	 
	 $scope.deleteTask = function(task, $index){
	 	dataService.deleteTask(task);
	 	$scope.tasks.splice($index, 1);
	 };

	 $scope.saveTask = function(task, $index){
	 	dataService.saveTask(task);
	 	
	 };

	})