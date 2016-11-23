/*
依照一个存着新进货物的二维数组，
更新存着现有库存(在 arr1 中)的二维数组.
 如果货物已存在则更新数量 . 
如果没有对应货物则把其加入到数组中，
更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列.
*/
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
  //装货
  for(var i = 0; i < arr2.length; i++){
    var index = isExist(arr1,arr2[i][1]);
    if(index>= 0){//货品已存在 数量加
        arr1[index][0] += arr2[i][0];
    }else{//货品不存在
      var insertIndex = sortName(arr1, arr2[i][1]);
        arr1.splice(insertIndex,0,arr2[i]);
    }
  }
    return arr1;
}

//sort by productName 返回插入坐标
function sortName(arr,name){
  for(var i = 0; i < arr.length; i++){
    if(arr[i][1].localeCompare(name) > 0) return i;
  }
  return i;
}

//判断物品是否存在 
function isExist(arr, name){
  for(var i = 0; i < arr.length; i++){
    if(arr[i][1] === name){
      return i;
    }
  }
  return -1;
  
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
