//get type
function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}
//deep copy
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
//
function deleteArrayVal(arrTobeDel, indexItem) {
  var arrtype = getType(arrTobeDel),
    indextype = getType(indexItem);

  if (arrtype != 'Array' || indextype != 'Array') throw new Error(`arguments is not an Array`);

  //索引集合里面必须全部为‘number’
  for (var i = 0; i < indexItem.length; ++i) {
    if (typeof indexItem[i] != 'number') throw new TypeError(`index is not a number`);
  }

  //避免后面的操作改变传入数组的值
  var newArrItem = deepCopy(arrTobeDel),
    newIndexItem = deepCopy(indexItem);
  //将传入的数组按照倒序排列
  newIndexItem.sort((a, b) => b - a);

  for (var j = 0; j < newIndexItem.length; j++) {
    newArrItem.splice(newIndexItem[j], 1);
  }

  return newArrItem;
}

module.exports = deleteArrayVal