'use strict'
angular.module('batApp')
.controller('addBrandController', function (getDataFactory, shareDataService, $state) {
  var vm = this
  vm.brand = {}

  vm.save = function (data) {
    console.log(data)
    getDataFactory.addBrand().save(data).$promise
    .then((response) => {
      if (!response.error) {
        $state.go('menuTemplate.brandViewTable')
      } else {
        vm.errmsg = response.error.message
      }
    })
  }

  vm.back = function () {
    vm.brand = {}
    $state.go('menuTemplate.brandViewTable')
  }
  vm.change = function () {
    vm.errmsg = ''
  }
})
