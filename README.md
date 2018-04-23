# del-array-value [![Build Status](https://travis-ci.org/liyang0612/del-array-value.svg?branch=master)](https://travis-ci.org/liyang0612/del-array-value)
> delete array element with index

## Install

```
$ npm install --save del-array-value
```


## Usage

```js
var delArrayValue = require('./');

let arr = ["a", "b", "c", 11, { x: 1}, 33];
let indexItem = [0, 1, 5];

console.log(delArrayValue(arr, indexItem));
//=> [11, {x: 1}]
```