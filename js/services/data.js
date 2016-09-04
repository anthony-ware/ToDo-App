angular.module('todoApp')

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