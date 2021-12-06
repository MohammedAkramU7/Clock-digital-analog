

function updateClock(){
    var now = new Date();
    var dname =now.getDay(),
        mo =now.getMonth(),
        dnum =now.getDate(),
        yr =now.getFullYear(),
        hou =now.getHours(),
        min =now.getMinutes(),
        sec =now.getSeconds(),
        pe ="AM";

        if(hou == 0){
            hou = 12;
        }
        if(hou >12){
            hou = hou -12;
            pe = "PM";
        }

        var months = ["January","February","March","April","May","June","July","Augest","September","October","November","December"];
        var week =["Sunday","Monday","Tuesday","Wednessday","Thusday","Friday","satuarday"];
        var id =["dayname","month","daynum","year","hour2","minute2","second2","period"];
        var values = [week[dname],months[mo],dnum,yr,hou,min,sec,pe];
        for(var i =0; i <id.length; i++)
        document.getElementById(id[i]).firstChild.nodeValue = values[i];
        

}
  function initClock(){
    updateClock();
    window.setInterval(initClock,1000);

    }
window.onload = function () {
    initClock();
    
};
