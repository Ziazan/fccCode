function permAlone(str) {
  var strSize = str.length;
  var repeatObj = {};//存放重复字母
  var allPermutations = 0;//总排列数
  var repeatCount = 0;//连续字母的排列数

  for(var i = 0; i < str.length; i ++){
  	if(repeatObj.hasOwnProperty(str[i])){//判断属性是否存在
  		repeatObj[str[i]] ++;
  	}else{
      repeatObj[str[i]] = 1;
    }
  }
  console.log(repeatObj);
  
  allPermutations = getFactorial(strSize);
  var j = strSize;
  var k = strSize;
  var temp = 1;
  
  for(var key in repeatObj){
    if(repeatObj[key] > 1){
      k --;
      repeatCount += getFactorial(j - repeatObj[key] + 1)*getFactorial(repeatObj[key]);
      temp *= getFactorial(repeatObj[key]);
    }
    console.log("j:",j,"repeatCount:",repeatCount);
  }
  if(k <= j -2){
    repeatCount -= getFactorial(k)*temp;
  }
  
  
  
  return allPermutations - repeatCount;
}

//求阶乘
 function getFactorial(num){
   var factorial = 1;
   for(var i = num; i >= 2; i--){
     factorial *= i;
     
   }
   return factorial;
 }

permAlone("abfdefa");