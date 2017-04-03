/**
 * Created by vtkhoi on 3/10/2017.
 */
(function () {
  'use strict';
  angular.module('songApp').directive('ovTableView', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/table-view/ovTableViewDirectiveTest.html',
      scope: {
        configData: '=',
        configFunction: '='
      },
      controller: 'TableViewCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  });
})();

// idTv: '@?',
// items: '=', // list item
// titleColumns: '=?',
// onDirectToEditPage: '=?',// used for edit button direct to edit page
// onRemoveItemByIndex: '=?',// used for message dialog
// isCheckedItem: '@?',
// formatData: '=?',
// disableCheckedAll: '=?',
// isCheckedHeaderChkbox: '=?',
// listCheckedChkBox: '=?', //
// searchText: '=?'
