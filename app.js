(function functionName() {
  'use strict';
var secapp=angular.module('secondapp',[]);
  secapp.controller('nameController',function ($scope) {
    $scope.name="";
    $scope.totalvalue=0;

    $scope.displayNumeric=function () {
      var totalnamevalue=
      calculateNumericForString($scope.name)
      $scope.totalvalue=totalnamevalue;
    };
    function  calculateNumericForString(string) {
      var totalstringvalue=0;
      for (var i = 0; i < string.length; i++) {
        totalstringvalue +=string.charCodeAt(i);
      }
      return totalstringvalue;
    }
  })
})();
