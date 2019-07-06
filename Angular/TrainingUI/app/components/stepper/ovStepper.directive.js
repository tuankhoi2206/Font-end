/**
 * Created by vtkhoi on 3/7/2017.
 */
angular.module('songApp')
  .directive('stepper', ['$compile','$timeout'], function ($compile, $timeout) {
    return {
      restrict: 'AE',
      scope: {
        idStepper: '@',
        sections: '='
      },
      templateUrl:'components/stepper/ovStepper.teamplate.html',
      controller: function ($scope, $compile) {

        var selectedIndex = 0;

        console.log('I am here');

        // function switchStep(section, index) {
        //   selectedIndex = index;
        //   var idSteppItem = '.stepp-item-' + index;
        //   var stepContent = $scope.idStepper + ' ' + idSteppItem;
        //   var el = angular.element(stepContent);
        //   removeActiveClass(idSteppItem);

        //   if (el) {
        //     let elContent = $compile('<div ng-include="' + section.templateUrl + '"></div>')($scope);
        //     $element.find(
        //       '.stepp-item-' + (index + 1) + ' .step-content').append(el);
        //   }
        // }

        // function removeActiveClass(idSteppItem) {
        //   var circle = idSteppItem + ' .circle';
        //   $scope.sections.forEach(function (section) {
        //     angular.element(circle).removeClass('active');
        //   });
        // }
      },
      link: function (scope, element, attrs) {
        // $timeout(function () {
        //   scope.sections.forEach(function (section, idx) {
        //     scope.compileSection(section.directive, idx);
        //   });
        // }, 0);
      }
    };
  });