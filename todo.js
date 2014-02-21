function TodoCtrl($scope){
	$scope.todos = [
		{name: 'client-side form validation is an important part of great user experience. Angualar Js lets you declare', done:true},
		{name: 'buy a egg', done: false }

	];

	$scope.remaining = function (){
		var count = 0;
		angular.forEach($scope.todos, function(todo){
			count += todo.done ? 0 : 1
		});
		return count;
	};

	$scope.archive = function () {
		var oldTodo = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodo, function(todo){
			if(!todo.done) $scope.todos.push(todo);
		});
	};

	$scope.addTodo = function(){
		$scope.todos.push({name:$scope.todoText, done:false});
		$scope.todoText = '';
	}
}