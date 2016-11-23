/*
	
找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

范围是两个数字构成的数组，两个数字不一定按数字顺序排序。

例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。
*/

function smallestCommons(arr) {
  var temp = 0;
  var numberArr = [];
  if(arr[0]>arr[1]){//数字大小调整
    temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  var j = 0;
   for(var i = arr[0]; i <= arr[1]; i++){  
     numberArr[j] = i;
     j++;
   }
  console.log(numberArr);
  for(var i =  0;i < arr[1] - arr[0]; i++){
   numberArr[i+1] = smallestMultiple(numberArr[i],numberArr[i+1]);
  }
  return numberArr[numberArr.length - 1];
}
function smallestMultiple(a, b){ //求两个数的最小公倍数
  var maxNum = a*b;
  for(var i = a; i <= maxNum ;i++){
    if(i%a === 0 && i%b === 0){
      return i;
    }
  }
  return maxNum;
}



smallestCommons([5,12]);
