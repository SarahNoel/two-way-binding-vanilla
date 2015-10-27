/* jshint -W083 */
// ** globals ** //
var scope = {};
var classNamesArray = ['lastName', 'name', 'age'];

// ** functions ** //

function getElements(){
  var classElements = [];
  for (var i = 0; i < classNamesArray.length; i++) {
    classElements.push(document.getElementsByClassName(classNamesArray[i]));
  }
  return classElements;
}

function domBinding(elementArray){
  for (var index in elementArray) {
    elementArray[index].onkeyup = function(){
      for (var index in elementArray) {
        elementArray[index].value = this.value;
      }
    };
  }
}

function modelBinding(elementArray, index){
    Object.defineProperty(scope, classNamesArray[index], {set: function(newValue){
        for (var index in elementArray) {
        elementArray[index].value = newValue;
      }
    }
  });
}

// ** function calls **//
var domElements = getElements();

for (var i = 0; i < domElements.length; i++) {
  domBinding(domElements[i]);
  modelBinding(domElements[i], i);
}














