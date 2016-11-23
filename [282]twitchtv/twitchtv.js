var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

function getChannelInfo(type, channel, successCallback){
	$.ajax({
		url: 'https://wind-bow.hyperdev.space/twitch-api/'+ type+'/'+ channel +'?callback=?',
		type: 'GET',
		dataType: 'JSON',
		success:function(data){
			console.log(channel + ":",data);
			successCallback(data);	
		}
	});
}

$(document).ready(function() {
	channels.forEach(function(channel){
		getChannelInfo("channels",channel, function(data){
			var status =  data.status?data.status:"offline";
			var logo = data.logo?data.logo:"https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
			var channelLi = "<li><a href=\'"+ 
				data.url +"\'><div class=\'pic\'><img src=\'" + 
				logo+"\' alt=\'\'></div><div class=\'name\'>"+
				data.display_name + "</div><div class=\'status\'>"+
				status+"</div></a></li>";
			var channelBox = document.getElementById("channelList");
			$("#channelList").append(channelLi);
		});
	})
});