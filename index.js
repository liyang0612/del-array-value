//get type
const getType = (obj) => Object.prototype.toString.call(obj).slice(8, -1);

//deep copy
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

//each array element
const eachArray = (arrItem, indexItem) => {
  //将需要删除元素先替换为特殊标识，从而不影响原定的索引
  arrItem.splice(indexItem[0], 1, null);
  //删除元素后，移除相应的索引
  indexItem.splice(0, 1);
  if (indexItem.length) eachArray(arrItem, indexItem);
}

//遍历数组，删除为null的元素
const eachArrayDel = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      arr.splice(i, 1);
      eachArrayDel(arr);
    }
  }
}

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

  if (newIndexItem.length) eachArray(newArrItem, newIndexItem);

  //移除所有特殊标识
  eachArrayDel(newArrItem)

  return newArrItem;
}

module.exports = deleteArrayVal