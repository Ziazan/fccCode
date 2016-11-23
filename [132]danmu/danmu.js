$(document).ready(function(){
	//代码要开始了！
	var messageboard = {
		"message":"",
		"time" : ""
	}
	//创建Wilddog Sync 实例
	var config = {
		syncURL: "https://ziazan-danmu01.wilddogio.com"
	};
	wilddog.initializeApp(config);


	//写入数据
	var ref = wilddog.sync().ref("message");
	function writeMsg(msg){
		ref.push(msg);

	}
	// ref.set({
	// 	"messageboard" : {
	// 		"message1" : {
	// 			"content" : "wilddog, Cool!",
	// 			"presenter" : "Jack"
	// 		}
	// 	}
	// });

	//监听数据
	//snapshot 里面的数据会一直和云端保持同步
	ref.on("value", function(snapshot){
		console.log(snapshot.val());
	})
	//如果你只想监听一次，那么你可以使用 once()
	ref.once("value").then(function(snapshot){
		console.info(snapshot.val());
	}).catch(function(err){
		console.error(err);
	})


	//发送数据
	$("#btn_send").click(function(){
		var msg = {
			"content" : $("#txtInput").val(),
			"time" : new Date().getTime()
		}
		console.log(msg);
		writeMsg(msg);
	});

	//回车发送数据
	$("#btn_send").keypress(function(event){
		var event=event?event:(window.event?window.event:null);//兼容IE和FF
		if(event.keyCode == '13'){
			$("#btn_send").trigger("click");
		}
	});

	//清空数据
	$("#btn_clear").click(function(){
		console.log("clear");
	});
});
	