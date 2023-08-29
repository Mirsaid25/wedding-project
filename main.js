let day = document.querySelector("#day")
let hour = document.querySelector("#hour")
let minut = document.querySelector("#minut")
let second = document.querySelector("#second")

let deadline = '2023-11-01';

function getTimeRemaining(endtime){  
    var t = Date.parse(endtime) - Date.parse(new Date());  
    var seconds = Math.floor( (t/1000) % 60 );  
    var minutes = Math.floor( (t/1000/60) % 60 );  
    var hours = Math.floor( (t/(1000*60*60)) % 24 );  
    var days = Math.floor( t/(1000*60*60*24) );  
    return {  
     'total': t,  
     'days': days,  
     'hours': hours,  
     'minutes': minutes,  
     'seconds': seconds
    };  
}
 
setInterval(() => {
    day.innerHTML = getTimeRemaining(deadline).days
    hour.innerHTML = getTimeRemaining(deadline).hours
    minut.innerHTML = getTimeRemaining(deadline).minutes
    second.innerHTML = getTimeRemaining(deadline).seconds
}, 1000);