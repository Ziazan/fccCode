function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var arr22 = [];
 
 var arr11 = arr1.filter(function(val, key){
    if(arr2.indexOf(val) < 0){
      console.log(val);
      arr22 =arr2.slice(arr2.indexOf(val),1);//删除重叠元素
    }
    return (arr2.indexOf(val) < 0);
  });
  return arr11.concat(arr22);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
