/*
computer:叉,user:圈
*/


var winKey = [
	[0,1,2],//横
	[3,4,5],
	[6,7,8],
	[0,3,6],//竖
	[1,4,7], 
	[2,5,8], 
	[0,4,8], //斜
	[2,4,6]
];

//初始化函数
function init(){
}


//点击画圈或叉
//flag  0:圈 1：叉
function draw(flag, ele){
	//当前位置上有棋子
	if($(ele).children('.icon').length){
		return;
	}
	console.log(status);
	var idx = (/\d/g.exec($(ele).attr('id')))[0]; //获取下标
	
	if(status[idx] !== undefined) {
		console.log(status[idx]);
		return; 
	}//当前位置上有棋子

	var name = flag? 'cross':'circle';
	var image = $('<div class="icon icon-' + name +'"></div>');
	$(ele).append(image);
	status[idx] = flag; //当前格子有棋子
	console.log(idx,status,status[idx]);
}

//点击的水波纹效果
function ripper(event, ele, radius, time){
	var ripper = $('<div class="ripper"></div>');
	var e = event || window.event,
	    x = e.clientX - ele.offset().left, //相对ele的鼠标的x坐标
		y = e.clientY - ele.offset().top; //相对ele的鼠标的y坐标
		ripper.css({
			'top': y - radius,
			'left': x - radius
		});
	$(ele).append(ripper);
	setTimeout(function(){
		ripper.remove();
	},time *1000);
}

//是不是赢了，谁赢
function isWin(){
	
}

//初始化
$(function(){
	init();
	$('.col').on('click', function(event){
		ripper(event, $(this), 15, 2);
		//画画
		draw(0,$(this));
	});
	console.log(status);

});

