
/**
 * @description 数组去重
 * @param {*} arr 
 * @returns {Array}
 */
var distict = function (arr) {
  if(!Array.isArray(arr)){
    return arr;
  }
  var returnArr = [];
  for (a in arr) {
    if(returnArr.indexOf(a) === -1){
      returnArr.push(a);
    }
  }
  return returnArr;
}


var sum = function() {
  
}
module.exports = {
  distict
}