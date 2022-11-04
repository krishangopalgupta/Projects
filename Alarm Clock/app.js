console.log("hello world");
const content  = document.querySelector(".content");
const currentTime = document.querySelector("h2");
const select = document.querySelectorAll('select');
const setAlarmbtn = document.querySelector(".btn");

let alarmtune;
let ringtone = new Audio("./files/ringtone.mp3");
// ringtone.play();
for(let i=12;i>=0;i--){
    i = i<10? ("0"+i):i;
    let options = `<option>${i}</option>`
    // console.log(options);
    // meaning of this line
    select[0].firstElementChild.insertAdjacentHTML("afterend",options);
    
}

console.log("hellow rodfd");

for(let i=59;i>=0;i--){
     i = i<10? "0"+i:i;
    let options = `<option>${i}</option>`
    select[1].firstElementChild.insertAdjacentHTML("afterend",options);
}

for(let i=2;i>=1;i--){
    let ampm = i==1?"AM" : "PM";
    let options = `<option>${ampm}</option>`
    select[2].firstElementChild.insertAdjacentHTML("afterend",options);
}


setInterval(()=>{
    let date = new Date;
    // when i take hour it does'nt work why?
    hour  = date.getHours();
    // console.log(h);
    minute =  date.getMinutes(); 
    second = date.getSeconds();
    ampm = "AM";

    if(hour>=12){
        hour = hour-12;
        ampm = "PM";
    }

    hour = hour==0? hour=12:hour;
    hour  = hour<10? "0"+hour : hour;
    minute  = minute<10? "0"+minute : minute;
    second  = second<10? "0"+second : second;
    
    // console.log(`${h} ${m} ${s}`);
    currentTime.innerText = `${hour}:${minute}:${second} ${ampm}`;
    if(alarmtune == `${hour}:${minute}  ${ampm}`){
        console.log("alarm ringing");
        ringtone.play();
        // doubt
        ringtone.loop = true;
    } 
    
},1000);

setAlarmbtn.addEventListener("click",(e)=>{
    e = `${select[0].value}:${select[1].value}  ${select[2].value}`;
    if(e.includes("Hour") || e.includes("minute") || e.includes("AM/PM")){
       return alert("please select time");
    }
    alarmtune = e;
    content.classList.add("disable");
    setAlarmbtn.innerText  = "Clear Alarm";
}); 