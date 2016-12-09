(function(){
	function Tomato(wkTime,rstTime){
		this.wkTime = wkTime;
		this.rstTime = rstTime;
		// this.wkRamaining = this.wkTime;
		// this.rstRamaining = this.rstTime
		this.remaining = this.wkTime;
		this.init = function(){
		}
		this.onUpdate = function(){

		}
		this.onfinish = function(){

		}
		this.onReset = function() {
		}
		this.changeTitle = function(title){

		}
		// num:=1或-1,flag 表示 0：工作时间 1：休息时间
		this.changeTime = function(num,flag){

		}
		//show剩余时间
		this.setRemaining = function(flag,time){

		}
	}

	Tomato.prototype = {
		isRunning: function(){
			return this.isWorking() || this.isResting();
		},
		isWorking: function(){
			return !!this.workTimer;
		},
		isResting:function(){
			return !!this.RestTimer;
		},
		startWork:function(){//开始工作
			if(this.isWorking()) return;
			this.remaining = this.wkTime;
			this.changeTitle("现在是工作时间");
			this.lastTime = Date.now();
			this.workTimer = setInterval(this.update.bind(this,0),1000);
		},
		startRest:function(){//开始休息
			if(this.isResting()) return;
			this.remaining = this.rstTime;
			this.changeTitle("现在是休息时间");
			this.lastTime = Date.now();
			this.RestTimer = setInterval(this.update.bind(this,1),1000);
		},
		start:function(){
			this.startWork();
			// this.startRest();
		},
		update:function(flag){//更新时间
			var delta = Date.now() - this.lastTime;
			this.remaining = Math.max(0,this.remaining - delta/1000/60);
			this.lastTime = Date.now();
			this.onUpdate();
			this.setRemaining(flag,200);
			if(this.remaining === 0){
				if(flag){
					clearInterval(this.RestTimer);
					this.RestTimer = null;
					console.log('flag:',flag);
				}else{
					clearInterval(this.workTimer);
					this.workTimer = null;
					console.log('flag:',flag);


				}
			}
		},

		toString:function(){//格式化时间
			var total = this.remaining*60 | 0,
				minutes = Math.floor(total/60) | 0;
				seconds = total % 60;
				return String(minutes) + ':' + ('00' + seconds).slice(-2);
		}
	}

	var t = new Tomato(1,1);
	t.onUpdate = function (){
		document.getElementById('time').innerHTML = this.toString();
	}
	t.init = function (){
		document.getElementById('workTime').innerHTML = this.wkTime;
		document.getElementById('restTime').innerHTML = this.rstTime;
	}
	t.changeTitle = function(title){
		if(this.isRunning){
			document.getElementById('timeTitle').innerHTML = title;
		}else{
			document.getElementById('timeTitle').innerHTML = 'SESSION';
		}		
	}
	t.changeTime = function(num,flag){
		if(this.isRunning()) return;
			if(flag){
				var resTime = document.getElementById('restTime');
				this.rstTime += num;
				if(this.rstTime < 1){
					this.rstTime = 0;
				}
				resTime.innerHTML = this.rstTime;
			}else{
				var wkTime = document.getElementById('workTime');
				this.wkTime  += num;
				if(this.wkTime < 1){
					this.wkTime = 0;
				}
				wkTime.innerHTML = this.wkTime;
			}
		}
	t.setRemaining = function(flag, height){
		var circle = document.getElementById('circle');
		var time = flag?this.rstTime:this.wkTime;
		var bgColor = flag?'#FF4444':'#99CC00';
		var clipH = Math.floor((1 - this.remaining / time)*height);
		console.log(time, bgColor, clipH);
		circle.style.clip = 'rect('+clipH+'px,auto,auto,auto)';
		circle.style.backgroundColor = bgColor;
	}
	document.getElementById('clock').addEventListener('click', function(){
		var clock = document.getElementById('time');
		t.startWork();
		var a = setInterval(function(){
			if(t.isWorking()) return;
			t.startRest();
			clearInterval(a);
		},1000);
	});
	document.getElementById('res_sub').addEventListener('click', function(){
		t.changeTime(-1,1);//休息减一
	});
	document.getElementById('res_add').addEventListener('click', function(){
		t.changeTime(1,1);//休息加一
	});
	document.getElementById('wk_sub').addEventListener('click', function(){
		t.changeTime(-1,0);//休息减一
	});
	document.getElementById('wk_add').addEventListener('click', function(){
		t.changeTime(1,0);//休息加一
	});
	t.init();

})();