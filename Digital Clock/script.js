
function clock() {
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
    let hours_span = document.getElementById('hour');
    let mins_span = document.getElementById('minute');
    let secs_span = document.getElementById('second');
    let meridian = document.getElementById('Ameridian')

    if(hours>11) {
        meridian.innerHTML = "PM";
    }
    else {
        meridian.innerHTML = "AM";
    }


    if (hours < 10)  {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    if (hours===13) hours=1;
    if (hours===14) hours=2;
    if (hours===15) hours=3;
    if (hours===16) hours=4;
    if (hours===17) hours=5;
    if (hours===18) hours=6;
    if (hours===19) hours=7;
    if (hours===20) hours=8;
    if (hours===21) hours=9;
    if (hours===22) hours=10;
    if (hours===23) hours=11;
    if (hours===24) hours=12
    
    hours_span.innerHTML =  hours; 
    mins_span.innerHTML = ":" + mins;
    secs_span.innerHTML = ":" + secs;
}

setInterval(clock,1000)

    
    
  















