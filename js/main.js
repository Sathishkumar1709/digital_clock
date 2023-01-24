function updateTime(){
	var now = new Date(),
		d = now.getDate(),
		day = now.getDay(),
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
	sessionEle = document.getElementById('session'),
	activeEle1 = document.getElementById('active1'),
	activeEle2 = document.getElementById('active2'),
	activeEle3 = document.getElementById('active3'),
	activeEle4 = document.getElementById('active4'),
	activeEle5 = document.getElementById('active5'),
	activeEle6 = document.getElementById('active6'),
	activeEle7 = document.getElementById('active7');
	
	d = (d < 10) ? "0" + d : d;
	mon=mon+1;
	mon = (mon < 10) ? "0" + mon: mon;
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;
	session = (h < 12) ? "AM" : "PM";
	if(day == "1"){
		activeEle=activeEle1;
	}
	else if(day == "2"){
		activeEle=activeEle2;
	}
	else if(day == "3"){
		activeEle=activeEle3;
	}
	else if(day == 4){
		activeEle=activeEle4;
	}
	else if(day == 5){
		activeEle=activeEle5;
	}
	else if(day == 6){
		activeEle=activeEle6;
	}
	else{
		activeEle=activeEle7;
	}
	
	dateEle.innerText = d;
	monEle.innerText = mon;
	yearEle.innerText = y;
	hrEle.innerText = h;
	minEle.innerText = m;
	secEle.innerText = s;
	sessionEle.innerText=session;
	activeEle1.innerText=activeEle;
	activeEle2.innerText=activeEle;
	activeEle3.innerText=activeEle;
	activeEle4.innerText=activeEle;
	activeEle5.innerText=activeEle;
	activeEle6.innerText=activeEle;
	}	
	setInterval(updateTime, 1000);
	updateTime();
		