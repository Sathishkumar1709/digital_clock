 function updateTime(){
  var now = new Date(),
  		d = now.getDate(),
		mon = now.getMonth(),
		y = now.getFullYear(),
  		h = now.getHours(),
 		m = now.getMinutes(),
  		s = now.getSeconds(),
		session="AM";
      
  dateEle = document.getElementById('date'),
  monEle = document.getElementById('mon'),
  yearEle = document.getElementById('yr'),
  hrEle = document.getElementById('hr'),
  minEle = document.getElementById('min'),
  secEle = document.getElementById('sec'),
  sessionEle = document.getElementById('session');
  
  d = (d < 10) ? "0" + d : d;
  mon = (mon < 10) ? "0" + mon: mon;
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  session = (h < 12) ? "AM" : "PM";
  
  dateEle.innerText = d;
  monEle.innerText = mon+1;
  yearEle.innerText = y;
  hrEle.innerText = h;
  minEle.innerText = m;
  secEle.innerText = s;
  sessionEle.innerText=session;
}

updateTime();

setInterval(updateTime, 1000);