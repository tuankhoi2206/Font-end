angular.module('stepper.directives')
  .directive('subDetails',
    function() {
      return {
        restrict: 'E',
        templateUrl: './sub_details.html'
      };
    }
  );


angular.module('stepper.directives')
  .directive('subSchedule',
    function() {
      return {
        restrict: 'E',
        templateUrl: './sub_schedule.html'
      };
    }
  );


angular.module('stepper.directives')
  .directive('subBudget',
    function() {
      return {
        restrict: 'E',
        templateUrl: './sub_budget.html'
      };
    }
  );
