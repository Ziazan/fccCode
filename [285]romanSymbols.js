function convert(num) {
  var factor = 1;
  var remainder = 0;
  var romanArr = [];
  while(num){
    remainder = num%10;
    if(remainder<4){
    	for(var i = 0; i < remainder; i++){
    		romanArr.unshift(romanSymbols(1, factor));
    	}
    }else if(remainder == 4){
    	romanArr.unshift(romanSymbols(5, factor));
    	romanArr.unshift(romanSymbols(1, factor));
        	
    }else if(remainder <9){
    	for(var i = 0; i < remainder-5; i++){
    		romanArr.unshift(romanSymbols(1, factor));
    	}
    	romanArr.unshift(romanSymbols(5, factor));
    }else{
    	romanArr.unshift(romanSymbols(10, factor));
    	romanArr.unshift(romanSymbols(1, factor));
    }
    // romanArr.push(romanSymbols(remainder, factor));
    num = parseInt(num/10); 
    factor *= 10;
  }
 return romanArr.join('');
}

function romanSymbols(num, factor){
	var str = '';
	switch(num*factor){
		case 1: str = 'I';break;
		case 5: str = 'V';break;
		case 10: str = 'X';break;
		case 50: str = 'L';break;
		case 100: str = 'C';break;
		case 500: str = 'D';break;
		case 1000: str = 'M';break;
		default: str = "";
	}
	return str;
}
convert(5888);
