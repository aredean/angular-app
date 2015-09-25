var app = angular.module('zippyModule', [])
    .directive('zippy', function(){
        return {
            restrict: 'C',
            replace: true,
            transclude: true,
            scope: { title:'@zippyTitle' },
            template: '<div>' +
                        '<div class="title">{{title}}</div>' + 
                        '<div class="body" ng-transclude></div>' +
                    '</div>',
            link: function(scope, element, attrs) {
                var title = angular.element(element.children()[0]),
                    opened = true;
                
                title.on('click', toggle);
                
                function toggle() {
                    opened = !opened;
                    element.removeClass(opened ? 'closed' : 'opened');
                    element.addClass(opened ? 'opened' : 'closed');
                }
                
                toggle();
            }
        }
});

app.controller('Ctrl3', function($scope) {
    $scope.title = 'Lorem Ipsum';
    $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
});