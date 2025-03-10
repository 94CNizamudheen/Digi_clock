
import React,{useEffect,useState} from "react";

function DigitalClock(){

    const [time,setTime]= useState(new Date());
    const [isDatevisible,setIsDatevisible]=useState(false);

    useEffect(()=>{
        const intervelId=setInterval(()=>{
            setTime(new Date())
        },1000);

        return()=>{
            clearInterval(intervelId);
        }

    },[]);
    
    function formateTime(){
        let hour=time.getHours();
        let min=time.getMinutes();
        let sec=time.getSeconds();
        let meridium= hour>=12 ? "PM" : "AM";

        hour= hour%12||12
        return `${padZero(hour)}:${padZero(min)}:${padZero(sec)} ${meridium}` 
    }
    function padZero(number){
        return number <10 ? "0" :"" + number
    }
    function formateDate(){
        const options={weekday:"long",year:"numeric",month:"long",day:"numeric"};
        return time.toLocaleDateString('en-US',options);
    }
    function toggleDateVisibilty(){
        setIsDatevisible(!isDatevisible);
    }

    return(
       
        <div className="clock-page">
           <div className="clock-container">
                <div className="clock-face">
                    <div className="time-display">
                        <span className="time">{formateTime().split(" ")[0]}</span>
                        <span className="meridium">{formateTime().split(" ")[1]}</span>
                    </div>
                    {isDatevisible && (
                        <div className="date-display">
                            {formateDate()}
                        </div>
                    )}
                    <div className="controls">
                        <button onClick={toggleDateVisibilty} className="toggle-button">
                            {isDatevisible ? "Hide Date" : "Show Date" }
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
};
export default DigitalClock;