angular.module("app").controller("HomeController", ["$scope", "syncObject", function($scope, syncObject) {
   syncObject.$bindTo($scope, "data");
 }]);

 .controller('HomeCtrl', '$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {

   var firebaseObj = new Firebase("https://blogkassio.firebaseio.com");

   var loginObj = $firebaseSimpleLogin(firebaseObj);

   $scope.SignIn = function($scope) {

   var username = $scope.user.email;
   var password = $scope.user.password;

   loginObj.$login('password', {
          email: username,
          password: password
      })
      .then(function(user) {
          // Success callback
          console.log('Authentication successful');
      }, function(error) {
          // Failure callback
          console.log('Authentication failure');
      });

   // Auth Logic will be here
  }
 }]);


 angular.module("app").controller("NovoController", ["$scope", "FirebaseService", "$timeout",
  function($scope, FirebaseService, $timeout) {

    var d   = new Date();
    var dtF = (d.getDate() < 10 ? "0" : "") + d.getDate() + "/" + (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    $scope.msg = "";
    $scope.title = "";
    $scope.body = "";
    $scope.author = "";
    $scope.dt = dtF;

    $scope.addMessage = function() {
      if ($scope.title && $scope.body) {
        FirebaseService.add({ title: $scope.title, body: $scope.body, author: $scope.author, date: $scope.dt });

        $scope.msg = "Salvo com Sucesso!";
        $timeout(function() {
          $scope.msg = "";
        }, 3000);

        $scope.title = "";
        $scope.body = "";
        $scope.author = "";
        $scope.dt = dtF;
      }
    };
  }
]);
