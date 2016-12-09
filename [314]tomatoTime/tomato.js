(function(){
	function Tomato(wkTime,rstTime){
		this.wkTime = wkTime;
		this.rstTime = rstTime;
		this.wkRamaining = this.wkTime;
		this.rstRamaining = this.rstTime
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
			this.remaining = this.wkRamaining;
			this.changeTitle("WORK!!");
			this.lastTime = Date.now();
			this.workTimer = setInterval(this.update.bind(this,0),1000);
		},
		startRest:function(time){//开始休息
			if(this.isResting()) return;
			this.remaining = this.rstRamaining;
			this.changeTitle("BREAKO(∩_∩)O~");
			this.lastTime = Date.now();
			this.RestTimer = setInterval(this.update.bind(this,1),1000);
		},
		stop:function(){
			if(this.isWorking()){
				clearInterval(this.workTimer);
				this.workTimer = null;
			}
			if(this.isResting()){
				clearInterval(this.RestTimer);
				this.RestTimer = null;
			}

		},
		//0:工作时间 1：休息时间
		update:function(flag){//更新时间
			var delta = Date.now() - this.lastTime;
			this.remaining = Math.max(0,this.remaining - delta/1000/60);
			if(flag){
				this.rstRamaining= this.remaining;
			}else{
				this.wkRamaining = this.remaining;
			}
			this.lastTime = Date.now();
			this.onUpdate();
			this.setRemaining(flag,200);
			if(this.remaining === 0){
				if(flag){
					clearInterval(this.RestTimer);
					this.RestTimer = null;
				}else{
					clearInterval(this.workTimer);
					this.workTimer = null;
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
	//工作时间，休息时间
	var t = new Tomato(25,5);
	t.onUpdate = function (){
		document.getElementById('time').innerHTML = this.toString();
	}
	t.init = function (){
		this.remaining = this.wkTime;
		this.wkRamaining = this.wkTime;
		this.rstRamaining = this.rstTime;
		document.getElementById('workTime').innerHTML = this.wkTime;
		document.getElementById('restTime').innerHTML = this.rstTime;
		this.onUpdate();
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
				this.rstTime += num;
				if(this.rstTime < 1){
					this.rstTime = 0;
				}
			}else{
				this.wkTime  += num;
				if(this.wkTime < 1){
					this.wkTime = 0;
				}
			}
			this.init();
		}
	t.setRemaining = function(flag, height){
		var circle = document.getElementById('circle');
		var time = flag?this.rstTime:this.wkTime;
		var bgColor = flag?'#FF4444':'#99CC00';
		var clipH = Math.floor((1 - this.remaining / time)*height);
		circle.style.clip = 'rect('+clipH+'px,auto,auto,auto)';
		circle.style.backgroundColor = bgColor;
	}
	document.getElementById('clock').addEventListener('click', function(){
		if(t.isRunning()){
			t.stop();
			return;
		}
		var clock = document.getElementById('time');
		t.startWork();
		var a = setInterval(function(){
			if(t.wkRamaining > 0) return;
			t.remaining = t.rstTime;
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