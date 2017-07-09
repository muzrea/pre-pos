'use strict';

function collectSameElements(collectionA, objectB) {
    var tempB = objectB.value.toString().split(',');
    var results = new Array();
    var t = 0;
    for(var x in collectionA) {
        for(var y in tempB) {
            if(collectionA[x].key == tempB[y]) {
                results[t] = collectionA[x].key;
                t++
            }
        }
    }
    return results;
}
