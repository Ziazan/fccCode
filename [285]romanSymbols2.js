/*
	罗马数字转化为阿拉伯数字
*/

function convertToNum(str) {
	var num = 0, now, next;
	var roman = {
		I:1,
		V:5,
		X:10,
		L:50,
		C:100,
		D:500,
		M:1000
	};
	for(var i = str.length - 1; i >= 0; i--){
		if(roman[str[i]] < roman[str[i + 1]] && i <str.length - 1){
			num -= roman[str[i]];
		}else{
			num += roman[str[i]];
		}
	}
 return num;
}

convertToNum('XXXVI');//36
convertToNum('XLIV');//44
convertToNum('XCIX');//99