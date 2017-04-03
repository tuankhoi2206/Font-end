"use strict";
angular.module("bsTable", []).directive("bsTable", function () {
  return {
    restrict: "A", scope: !0, compile: function (n) {
      var f = 0, t = n.find("tbody:first"), r = t.find("tr:first"), e = " | bsTableSkip:bsTablePagination.skipAt | limitTo:bsTablePagination.pageSize", i, u, o;
      if (!t.is("[ng-repeat]") && !t.is("[data-ng-repeat]") && !r.is("[ng-repeat]") && !r.is("[data-ng-repeat]")) {
        console.warn("BsTable directive: ng-repeat attribute not found!");
        return
      }
      return i = t.is("[ng-repeat]") || r.is("[ng-repeat]") ? "ng-repeat" : "data-ng-repeat", u = t.is("[" + i + "]") ? t.attr(i) : r.attr(i), t.is("[" + i + "]") ? t.attr(i, u + e) : r.attr(i, u + e), f = r.children("td").size(), o = '<tfoot><tr><td colspan="' + f + '"><ul class="pagination"><\/ul><select ng-model="bsTablePagination.pageSize" class="form-control select-page-size" convert-to-number><option value="5">5<\/option><option value="10">10<\/option><option value="20">20<\/option><option value="40">40<\/option><\/select><\/td><\/tr><\/tfoot>', n.append(o), function (n, t) {
        function e() {
          for (var f = "", u = 0; u < Math.ceil(r / n.bsTablePagination.pageSize); u++)f += "<li " + (i.page == u + 1 ? 'class="active"' : "") + '><a ng-href="#">' + (u + 1) + "<\/a><\/li>";
          t.find(".pagination").html(f);
          t.find(".pagination").find("li").bind("click", h)
        }

        function h() {
          var t = parseInt($(this).find("a").text());
          $(this).parent().find("li").removeClass("active");
          $(this).addClass("active");
          i.page = t;
          i.skipAt = (i.page - 1) * i.pageSize;
          n.$digest()
        }

        var i = n.bsTablePagination = {}, o = t.find("td"), f = u.match(/^\s*(.+)\s+in\s+(.*)\s*$/)[2], s = n.$eval(f), r = s.length;
        n.$watchCollection(f, function () {
          r = n.$eval(f).length;
          i.lastPage = Math.ceil(r / i.pageSize);
          i.lastPage !== 0 && i.lastPage < i.page && (i.page = 1, i.skipAt = (i.page - 1) * i.pageSize);
          e()
        });
        n.$watch("bsTablePagination.pageSize", function () {
          e()
        });
        i.pageSize = 5;
        i.lastPage = Math.ceil(r / i.pageSize);
        i.page = 1;
        i.skipAt = (i.page - 1) * i.pageSize;
        o.children(".select-page-size").change(function () {
          var t = parseInt($(this).val());
          i.lastPage = Math.ceil(r / t);
          i.page = 1;
          i.skipAt = (i.page - 1) * t;
          n.$digest()
        })
      }
    }
  }
}).directive("convertToNumber", function () {
  return {
    require: "ngModel", link: function (n, t, i, r) {
      r.$parsers.push(function (n) {
        return n ? parseInt(n, 10) : null
      });
      r.$formatters.push(function (n) {
        return n ? "" + n : null
      })
    }
  }
}).filter("bsTableSkip", function () {
  return function (n, t) {
    return n.slice(t)
  }
});
//# sourceMappingURL=bs-table.min.js.map
