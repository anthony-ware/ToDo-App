

angular.module('todoApp')

.controller('mainCtrl', function($scope, dataService){
	 $scope.addTask= function(){
	 	let task = {name:"This is a new task."};
<<<<<<< HEAD
	 	$scope.tasks.push(task);
=======
	 	$scope.tasks.unshift(task);
>>>>>>> fa123014b2636a83942b9aa1be858b8371468ea5
	 };

	 dataService.getTasks(function(response){
			console.log(response.data);
			$scope.tasks = response.data;	
			});
	 
	 $scope.deleteTask = function(task, $index){
	 	dataService.deleteTask(task);
	 	$scope.tasks.splice($index, 1);
	 };

	 $scope.saveTask = function(task){
	 	dataService.saveTask(task);
	 };

	})