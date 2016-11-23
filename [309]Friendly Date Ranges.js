/*
 让日期区间更友好！

把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。

易读格式应该是用月份名称代替月份数字，用序数词代替数字来表示天 (1st 代替 1).

记住不要显示那些可以被推测出来的信息: 如果一个日期区间里结束日期与开始日期相差小于一年，则结束日期就不用写年份了。月份开始和结束日期如果在同一个月，则结束日期月份就不用写了。

另外, 如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写。

例如:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) 应该返回 ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) 应该返回 ["July 1st, 2016", "July 4th, 2018"].
*/
function makeFriendlyDates(arr) {
  
  var friendlyDate = ['', ''];
  var month = ['January','February','March','April','May','June','July','Aug','September','October','November','December'];
 
  var date0 = new Date();
  var date1 = new Date(Date.parse(arr[0].replace(/-/g,"/")));
  var date2 = new Date(Date.parse(arr[1].replace(/-/g,"/")));
  var timeDiff = date2 - date1;
  var isInAYear = date2 - date1 < 1000 * 60 * 60 * 24 * 365? true:false;

  var year0 = date0.getFullYear();
  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();

  var month1 = date1.getMonth();
  var month2 = date2.getMonth();

  var day1 = date1.getDate();
  var day2 = date2.getDate();
  
  console.log("timeDiff:",timeDiff,"isInAYear:",isInAYear);
  
  if(year1 == year2 && month1 == month2 && day1 == day2){
    var a = [];
    a[0] = month[month1] + " " + parseDay(day1) + ", " +year1;
    return a;
  }
  
  //年
  if(isInAYear && year1 > year0){
    friendlyDate[0] = ", " + year1;
  }else if(!isInAYear && year2 >year1){
    friendlyDate[0] = ", " + year1;
  }
  if(!isInAYear){
    friendlyDate[1] = ", " + year2;
  }
  
  //日
  friendlyDate[0] = parseDay(day1) + friendlyDate[0].substr(0,friendlyDate[0].length);
  friendlyDate[1] = parseDay(day2) + friendlyDate[1].substr(0,friendlyDate[1].length);

  //月
  if((month1 != month2) || (year1 != year2)){
    friendlyDate[0] = month[month1] + " " + friendlyDate[0].substr(0,friendlyDate[0].length);
    friendlyDate[1] = month[month2] + " " + friendlyDate[1].substr(0,friendlyDate[1].length);
  }else{
    friendlyDate[0] = month[month1] + " " + friendlyDate[0].substr(0,friendlyDate[0].length);
  }
  console.log("3:", friendlyDate);

  return friendlyDate;
}

function parseDay(day){
  var dayArr = ['st','nd','rd','th'];
  if(day < 4){
    return day + dayArr[day - 1];
  }
  return day + dayArr[3];//th
}

makeFriendlyDates(["2022-09-05", "2023-09-04"]);