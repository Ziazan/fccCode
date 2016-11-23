/*
创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.

给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 而数学术语 "对等差分" 
的集合就是指由所有只在两个集合其中之一的元素组成的集合(A △ B = C = {1, 4}). 
对于传入的额外集合 (如 D = {2, 3}), 
你应该安装前面原则求前两个集合的结果与新集合的对等差分集合 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/
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
