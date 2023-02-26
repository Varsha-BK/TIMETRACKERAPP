import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function MyTimer() {
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset
  } = useStopwatch({ autoStart: false });


  let time = `${hours}:${minutes}:${seconds}`
console.log(time);
 sessionStorage.setItem("time",time)
 

  return (
    <div style={{textAlign: 'center', marginTop:"10px",display:"flex",}}>
      {/* <div style={{fontSize: '20px'}}> */}
        {/* <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span> */}
      {/* </div> */}
      {/* <p>{isRunning ? 'Running' : 'Paused'}</p> */}
      <button className="btn btn-success" onClick={start}>Start</button>
      <button className="btn btn-warning"  onClick={pause}>Pause</button>
      <button className="btn btn-danger" onClick={reset}>Reset</button>
    </div>
  );
}


export default MyTimer