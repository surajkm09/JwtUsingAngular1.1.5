angular.module('example.service',[])
    .value('greet',{
        salutaion:"Hello"
    })
    .value('user',{
        load:function(name){
            this.name = name; 
        }

    });

angular.module('example',['example.service'])
    .run(function(user){
        user.load("suarj kumar");
    });

var exampleController = function($scope,user){
    $scope.greeting = user.name ;
}