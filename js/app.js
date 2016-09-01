angular.module('todoApp',[])

.controller('mainCtrl',function($scope){
	$scope.edited=function(){
		alert('A change has been made!');
	};

$scope.tasks= [
{'name': 'Clean the house'},
{'name': 'Eat Breakfast'},
{'name': 'Go for a run'},
{'name': 'Master Angular'},
{'name': 'Read a book'},
{'name': 'More Angular'}
];

});


