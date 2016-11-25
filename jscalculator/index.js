window.onload = function (){
	//节点获取
	var btnList = document.querySelectorAll("li");
	var inputFormula = document.getElementsByClassName("formula")[0];
	var resultNode = document.getElementsByClassName("result")[0];
    var flag = 0;//为1时归0
	//初始化变量
	var nowNum = 0;
	inputFormula.innerHTML = "0";
	resultNode.innerHTML = "0";

	//给按钮绑定事件
	for(var i = 0 ; i < btnList.length; i++){
		btnList[i].addEventListener("click", btnClick, false);
	}

//点击事件
	function btnClick(ev){
		if(flag){
			clear();
		}
		var btnStr = ev.toElement.innerText;
		switch(btnStr){
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '.':showNum(btnStr);break;
			case 'AC':clear();break;
			case '+':
			case '-':
			case 'x':
			case '/':showNum(btnStr);break;
			case '=':doOperation();break;

		}
	}

//显示输入的数字
	function showNum(str){
		if(inputFormula.innerHTML === '0'){
			inputFormula.innerHTML = '';
		}
		if(inputFormula.innerHTML.length == 16){
			str = '';
		}	
		inputFormula.innerHTML += str + '';
	}

//归零
	function clear(){
		inputFormula.innerHTML = 0;
		resultNode.innerHTML = 0;
		flag = 0;//已经清空
	}

//进行运算
	function doOperation(){
		var regexp = /^\d+(\.\d+)?[+-x/]\d+(\.\d+)?$/;
		var result = 0;
		console.log(inputFormula.innerHTML,regexp.test(inputFormula.innerHTML));
		if(regexp.test(inputFormula.innerHTML)){
			var operation = inputFormula.innerHTML.match(/([^\d^\.])/g);
			var numbers = inputFormula.innerHTML.match(/[\d]+(\.*[\d])?/g);
			console.log("numbers:", numbers,"operation",operation);
			switch(operation[0]){
				case "+":  result = Number(numbers[0]) + Number(numbers[1]);break;
				case "-":  result = numbers[0] - numbers[1];break;
				case "x":  result = numbers[0] * numbers[1];break;
				case "/":  result = numbers[0] / numbers[1];break;
			}
			resultNode.innerHTML = result;
			//得到结果后 flag = 1;再点击其他按键时，先归0;
			flag = 1;
		}
	}


//结束	
}



