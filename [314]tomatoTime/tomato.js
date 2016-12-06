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
}

//检查显示格式
function checkTime(time){
	if(time<10){
		time = '0'+time;
	}
	return time;
}