/**
 * Created by vtkhoi on 3/7/2017.
 */
angular.module('songApp')
  .directive('stepper', ['$compile', '$timeout', '$document', function ($compile, $timeout, $document) {
    return {
      restrict: 'AE',
      scope: {
        idStepper: '@',
        sections: '='
      },
      transclude: true,
      templateUrl: 'components/stepper/ovStepper.template.html',
      controller: function ($scope, $compile, $element) {

        var selected = 0;
        var STEPPER_ITEM_ID = '#stepper-item-';
        var STEPPER_CONTENT = '.stepper-content';
        var CIRCLE = '.circle';

        $scope.switchStep = function (section, nextStepIdx) {
          var circle;
          circle = STEPPER_ITEM_ID + selected + ' ' + CIRCLE;

          var circles = $(circle);
          var nextStep = $(circles[nextStepIdx]);
          selected = nextStepIdx;

          circles.each(function (_, step) {
            $(step).removeClass('active');
          });
          nextStep.addClass('active');
        };

        $scope.selected = function (idx) {
          return selected === idx;
        };

        $scope.compileSection = function (section, index) {
          var elContent;
          var template = angular.element('<div ng-include="\'' + section.templateUrl + '\'"></div>');
          elContent = $compile(template)($scope);
          $element.find(STEPPER_ITEM_ID + (index + 1) + ' ' + STEPPER_CONTENT).append(elContent);
        };
      },
      link: function (scope, element, attrs) {
        $timeout(function () {
          scope.sections.forEach(function (section, idx) {
            scope.compileSection(section, idx);
          });
        }, 0);
      }
    };
  }]);
