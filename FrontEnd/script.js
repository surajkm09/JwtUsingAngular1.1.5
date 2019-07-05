angular.module('mainApplication',[],function($routeProvider, $locationProvider){
    $routeProvider.when('/',{
        templateUrl:'main.html',
        controller:'maincontroller'
    });
    $routeProvider.when('/login',{
        templateUrl:'login.html',
        controller:'logincontroller'

    });
    $routeProvider.when('/signup',{
        templateUrl:'signup.html',
        controller:'signupcontroller'

    });
    $locationProvider.html5Mode(true);



});

function signupcontroller($scope){

    $scope.user={};
    $scope.onSubmit =function()
    {
        if($scope.user.firstName ===''||$scope.user.userName===''||$scope.user.lastName===''||$scope.user.password==='')
        {
            return ; 
        }
        if(typeof($scope.user.firstName)==='undefined'||typeof($scope.user.password)==='undefined'||typeof($scope.user.userName)==='undefined'||typeof($scope.user.lastName)==='undefined')
        {
            return ;
        }
        console.log('valid submit details !!');
    }


}


function logincontroller($scope){
    $scope.user={};

    $scope.onSubmit=function(){
        if($scope.user.userName ==='' || $scope.user.password==='' || typeof($scope.user.userName)=='undefined' ||typeof($scope.user.password)=='undefined')
        {
            return ; 
        }
            console.log("submitting "+$scope.user.userName+" password "+$scope.user.password);
    }
}

function maincontroller($scope){
 

}