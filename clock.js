

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

function updateClock(){
    var now = new Date();
    var dname =now.getDay()
        mo = now.getMonth(),
        dnum= now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min2 = now.getMinutes(),
        sec2 = now.getSeconds(),
        pe ="AM";

        if(hou == 0){
            hou = 12;
        }
        if(hou >12){
            hou = hou -12;
            pe = "PM";
        }

        var months = ["January","February","March","April","May","June","July","Augest","September","October","November","December"];
        var week = ["Sunday","Monday","Tuesday","Wednessday","Thusday","Friday","satuarday"];
        var ids = ["dayname","month","daynum","year","hour2","minute2","second2","period"];
        var values = [week[dname],months[mo],dnum,yr,hou,min2,sec2,pe];
        for(var i =0; i <ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
 function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
 }
