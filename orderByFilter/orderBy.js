var app = angular.module('orderByApp'[]);

app.controller('Ctrl', function($scope){
    $scope.friends = 
        [{name: 'Jhon', phone: '555-1276', age:10}, 
         {name: 'Mary', phone: '800-BIG-MARY', age:19}, 
         {name: 'Mike', phone: '555-4321', age: 21}, 
         {name: 'Adam', phone: '555-5678', age:35}, 
         {name: 'Julie', phone: '555-8765', age: 29}, 
         {name: 'Juliette', phone: '555-5678', age: 23}]
    $scope.predicate= '-age';
});