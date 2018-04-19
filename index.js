//get type
const getType = (obj) => Object.prototype.toString.call(obj).slice(8, -1);

//deep copy
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

//
const deleteArrayVal = (arrTobeDel, indexItem) => {
  let arrtype = getType(arrTobeDel),
    indextype = getType(indexItem);

  if (arrtype != 'Array' || indextype != 'Array') throw new Error(`arguments is not an Array`);

  //索引集合里面必须全部为‘number’
  for (let i = 0; i < indexItem.length; ++i) {
    if (typeof indexItem[i] != 'number') throw new TypeError(`index is not a number`);
  }

  //避免后面的操作改变传入数组的值
  let newArrItem = deepCopy(arrTobeDel),
    newIndexItem = deepCopy(indexItem);
    //将传入的数组按照倒序排列
    newIndexItem.sort((a, b) => b - a);
    
    for(let i = 0; i < newIndexItem.length; i++){
      newArrItem.splice(newIndexItem[i], 1);
    }

  return newArrItem;
}

module.exports = deleteArrayVal