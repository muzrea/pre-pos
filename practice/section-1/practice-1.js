'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = new Array();
  var C = collectionB.toString();
  for(var i=0;i<collectionA.length;i++){
   if(C.indexOf(collectionB[i].toString())>-1){
    result.push(collectionB[i]);
   }
  }
  return result;
}
