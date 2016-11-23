/*
返回一个数组，其内容是把原数组中对应元素的平均海拔转换成其对应的轨道周期.

原数组中会包含格式化的对象内容，像这样 {name: 'name', avgAlt: avgAlt}.

至于轨道周期怎么求，戳这里 on wikipedia (不想看英文的话可以自行搜索以轨道高度计算轨道周期的公式).

求得的值应该是一个与其最接近的整数，轨道是以地球为基准的.

地球半径是 6367.4447 kilometers, 地球的GM值是 398600.4418, 圆周率为Math.PI

在wiki上找到的公式
T = 2*PI((r+R)^3/GM)^(1/2)
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var period = [];
  for(var i = 0; i < arr.length; i++){
    var obj = {};
    obj.name = arr[i].name;
    obj.orbitalPeriod = Math.round(2*Math.PI*Math.pow(Math.pow(earthRadius + arr[i].avgAlt, 3)/GM,1/2));
    period.push(obj);
  }
  
  return period;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);