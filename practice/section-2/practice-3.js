'use strict';


function countSameElements(collection) {
  var results = {};
  for(var i=0,m,n = collection.length; m = collection[i],i<n; i++)
  {
    var rv = /^([a-z]+)(?:.+?(\d+))?/i.exec(v);
    if (!results[rv[1]])
        results[rv[1]] = 0;
    results[rv[1]] += rv[2] ? parseInt(rv[2], 10) : 1;
  }
  console.log(results);
  return results;
}
