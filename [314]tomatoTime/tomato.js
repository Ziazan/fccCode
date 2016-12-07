var tomato = {
	workTime:0,
	restTime:0,
	addWorkTime:function(){

	}

}

window.onload = function(){
	var time = document.getElementById('time');
	var clock = document.getElementById('clock');
	var minutes = document.getElementById('minutes');
	var seconds = document.getElementById('seconds');
	var workTime = time.innerText*60;
	console.log(time.innerText,workTime);
	var start = setInterval(function(){
		--workTime;
		seconds.innerText = checkTime(workTime%60);
		minutes.innerText = checkTime(Math.floor(workTime/60));
		if (workTime == 0) {
			clearInterval(start);
		}
	},100);

	var addBtn = document.getElementById('btn-add');
	var subBtn = document.getElementById('btn-subtract');

	addBtn.addEventListener('click',function(event) {
		setTime('time',1);
	});
	subBtn.addEventListener('click', function(event){
		setTime('time',-1);
	});

}


//设置时间，flag:1,flag:-1
function setTime(ele,flag){
	var time = document.getElementById(ele);
	time.innerText = parseInt(time.innerText) + flag;
	if(time.innerText < 0){
		time.innerText = 0;
	}
	
	

}

//检查显示格式
function checkTime(time){
	if(time<10){
		time = '0'+time;
	}
	return time;
}