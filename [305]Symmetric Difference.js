function sym(args) {
	//参数转数组
	var argArr = [];
   for (var i = 0; i < arguments.length; i++) {
   	argArr[i] = arguments[i]; 
   }
  // console.log(argArr,arguments.length,"----------------");
  //遍历数组求差分
  var tempArr = argArr[0];
  for(var i = 0; i < argArr.length - 1; i ++){
    var set = getMixSet(tempArr);
    tempArr = set(argArr[i+1]);
  }
  
   return tempArr;
}
//求两个函数的非交集
function getMixSet(arr1){
  return function innerFunc(arr2){
  	//集合合并
  	var arr = [];
  	arr = arr1.concat(arr2);
    console.log("arr:", arr);
    var newArr = [];
    var j = 0;
    arr.reduce(function(pre, current, index){
      if(pre.indexOf(current) < 0) return pre.push(current);
      newArr[j] = current;
    });
  	arr = arr.filter(function(value){
  		if(arr1.indexOf(value) >= 0 && arr2.indexOf(value) >= 0){
            console.log(value);
  			return false;
  		}
  		return true;
  	});
    
    return arr;
  };
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
