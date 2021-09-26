setInterval(update,1000);
function update(){
let dest = new Date("sep 30, 2021 10:0:0").getTime();
let now = new Date().getTime();
let diff = dest - now;
let days = Math.floor(diff/(1000*24*60*60));
let hours = Math.floor(diff%(1000*24*60*60)/(1000*60*60));
let minutes = Math.floor(diff%(1000*60*60)/(1000*60));
let seconds = Math.floor(diff%(1000*60)/(1000));
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
}
setInterval(update2,1000);
function update2(){
let dest2 = new Date("oct 2, 2021 10:20:20").getTime();
let now2 = new Date().getTime();
let diff2 = dest2 - now2;
let days2 = Math.floor(diff2/(1000*24*60*60));
let hours2 = Math.floor(diff2%(1000*24*60*60)/(1000*60*60));
let minutes2 = Math.floor(diff2%(1000*60*60)/(1000*60));
let seconds2 = Math.floor(diff2%(1000*60)/(1000));
document.getElementById("days2").innerHTML = days2;
document.getElementById("hours2").innerHTML = hours2;
document.getElementById("minutes2").innerHTML = minutes2;
document.getElementById("seconds2").innerHTML = seconds2;
}