'use strict';

function collectSameElements(collectionA, objectB) {
  var results = new Array ();
  var C = collectionB.value.toString();
  for(var i=0;i<collectionA.length;i++){
   if(C.indexOf(collectionB.value[i].toString())>-1){
    result.push(collectionB.value[i]);
   }
  }
  return results;
}
