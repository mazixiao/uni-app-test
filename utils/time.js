//日期转时间戳
function getUnixTime(dateStr) {
  var newstr = dateStr.replace(/-/g, '/');
  var date = new Date(newstr);
  var time_str = date.getTime().toString();
  return time_str.substr(0, 10);
}

//时间戳转日期
function toDate(number) {
  var n = number;
  var date = new Date(parseInt(n) * 1000);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}

//当前日期加减天数
function mathChangeDate(date, method, days) {
  //method:'+' || '-'
  //ios不解析带'-'的日期格式，要转成'/'，不然Nan，切记
  var dateVal = date.replace(/-/g, '/');
  var timestamp = Date.parse(dateVal);
  if (method == '+') {
    timestamp = timestamp / 1000 + 24 * 60 * 60 * days;
  } else if (method == '-') {
    timestamp = timestamp / 1000 - 24 * 60 * 60 * days;
  }
  return toDate(timestamp);
}

//时间戳转换具体时间
function getDateDiff(dateTimeStamp) {
  var result = '';
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var halfamonth = day * 15;
  var month = day * 30;
  var now = new Date();//有些特殊 不能使用 new Date()
  var diffValue = now - dateTimeStamp;
  if (diffValue < 0) { return; }
  var monthC = diffValue / month;
  var weekC = diffValue / (7 * day);
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;
  if (monthC >= 1) {
    result = "" + parseInt(monthC) + "月前";
  }
  else if (weekC >= 1) {
    result = "" + parseInt(weekC) + "周前";
  }
  else if (dayC >= 1) {
    result = "" + parseInt(dayC) + "天前";
  }
  else if (hourC >= 1) {
    result = "" + parseInt(hourC) + "小时前";
  }
  else if (minC >= 1) {
    result = "" + parseInt(minC) + "分钟前";
  } else
    result = "刚刚";
  return result;
};

//获取当前年份，月份， 例： getCurrentTime(new Date(),"year")
const getCurrentTime = (date, method) => {
  if (method == "year") {
    return date.getFullYear();
  } else if (method == "month") {
    return date.getMonth() + 1;
  }
  return date;
}

//获取当前服务器时间,参数直接用 new Date() 就可以了
const formatDateThis = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}
const formatTimes = time => {
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()
  return [hour, minute, second].map(formatNumber).join(':')
}
//补0
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//比较两个时间大小(格式参考yyyy-mm-dd hh:mm:ss)
function compareTime(time) {
  var now = this.formatDateThis(new Date());

  console.log('time', time);
  console.log('now', now);
  // var arr = now.split(' ');
  // now = arr[0];
  now = this.getUnixTime(now);
  time = this.getUnixTime(time);
  console.log('现在', now, '结束时间', time);

  if (time > now) {
    console.log('没过期');
    return false;
  }
  console.log('过期');
  return true;
}

module.exports = {
  getCurrentTime: getCurrentTime,
  getUnixTime: getUnixTime,
  formatDateThis: formatDateThis,
  formatTime: formatTime,
  formatTimes: formatTimes,
  toDate: toDate,
  getDateDiff: getDateDiff,
  mathChangeDate: mathChangeDate,
  compareTime: compareTime
}