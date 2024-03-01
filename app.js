angular.module('notepadApp', [])
  .controller('notepadController', function($scope) {
    $scope.content = localStorage.getItem('notepadContent') || '';

    $scope.clear = function() {
      $scope.content = '';
    };

    $scope.save = function() {
      localStorage.setItem('notepadContent', $scope.content);
      alert('Content saved successfully!');
    };
  });
