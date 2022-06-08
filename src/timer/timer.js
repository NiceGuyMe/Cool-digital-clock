import React,{useRef, useState,useEffect} from "react";
const Timer = ()=> {
    const [timerDays,setTimerDays] = useState('00')
    const [timerHours,setTimerHours] = useState('00')
    const [timerMinutes,setTimerMinutes] = useState('00')
    const [timerseconds,setTimerSeconds] = useState('00')
let interval = useRef();
const statTimer = ()=>{
    const CountDownDate = new Date('December 31, 2022 23:59:00').getTime();

    interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = CountDownDate-now;

        const days = Math.floor(distance / (1000*60*60*24));
        const hours = Math.floor((distance % (1000*60*60*24) /(1000*60*60)));
        const minutes = Math.floor(distance % (1000*60*60)/(1000*60));
        const secondes = Math.floor(distance % (1000*60)/(1000));

if(distance<0){
    clearInterval(interval);
    alert("Happy new years")
}else{
    setTimerDays(days);
    setTimerHours(hours);
    setTimerMinutes(minutes);
    setTimerSeconds(secondes);
}

    }, 1000);
}

useEffect(() => {
  statTimer();
  return () => {
    clearInterval(interval);
  }})

  return(
    <div className="clock">
      {padStartDigit(timerDays)}:{padStartDigit(timerHours)}:{padStartDigit(timerMinutes)}:{padStartDigit(timerseconds)}
      </div>
  )
}
function padStartDigit(digit) {
    return digit.toString().padStart(2, "0");
  }
export default Timer;