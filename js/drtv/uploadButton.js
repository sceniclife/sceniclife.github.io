app.directive('uploadButton', function(){
  return {
    link: function(scope, element, attributes) {
      var el = angular.element(element);
      var button = el.children()[0];
      var fileInput = angular.element('<input class="hiddenInput" type="file" />');
      el.append(fileInput);
    }
  }
});
