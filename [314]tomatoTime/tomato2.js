(function(){
	// "use strict";

	function Timer(duration){
		this.duration = duration;//持续时间
		this.remaining = duration;//剩余时间

		this.onupdate = function(){

		}

		this.onfinish = function(){

		}
	}

	Timer.prototype = {
		isRunning:function(){
			return !!this.timer;
		},
		hasFinished: function(){
			return this.remaining === 0;
		},
		reset: function(){
			this.stop();
			this.remaining = this.duration;
		},
		start: function(){
			if(this.isRunning() || this.hasFinished()){
				return ;
			}
			this.lastTime = Date.now();
			this.timer = setInterval(this.update.bind(this),100);
		},
		stop:function(){
			clearInterval(this.timer);
			this.timer = null;
		},
		update: function(){
			var delta = Date.now() - this.lastTime;
			this.remaining = Math.max(0, this.remaining - delta);
			this.lastTime = Date.now();
			this.onupdate();

			if(this.remaining <= 0){
				this.stop();
				this.remaining = 0;
				this.running = false;
				this.onfinish();
			}
		},
		toString:function(){
			var total = this.remaining /1000 |0,
				minutes = total/60 | 0;
				seconds = total % 60;
				return String(minutes) + ":" + ("00" + seconds).slice(-2);
		}
	};

	var t = new Timer(10*1000);
	t.onupdate = function (){
		document.getElementById('time').innerHTML = this.toString();
	}
	t.onfinish = function(){
		document.getElementById('toggle').disabled = true;
	}
	var toggle = document.getElementById('toggle');

	toggle.addEventListener('click', function(){
		var clock = document.getElementById('time');
		if(t.isRunning()){
			clock.style.color = 'gray';
			t.stop();
		}else{
			clock.style.color = 'black';
			t.start();
		}
	}, false);

})();