'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var results = objectB;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<objectB.length;j++){
       if(collectionA.key[i] == objectB.key[j]){
         result.count[i] = --result.count[i];
       }
    }
}
  return results;
}
