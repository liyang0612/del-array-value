var delArrayValue = require('./');

var arr = ["a", "b", "c", 11, { x: 1}, 33];
var indexItem = [0, 1, 5];

console.log(delArrayValue(arr, indexItem));