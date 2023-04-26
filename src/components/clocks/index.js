import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import InputName from "../inputName";
import ProgressBar from "../progressBar";
import '../../styles/timer.css'


export default function Timer({id, minutes, seconds, create, name, handleFinish}) {

  const [[mins, secs], setTime] = useState([minutes, seconds]);
  
  const [intervalId, setIntervalId] = useState(null);
  const [start, setStart] = useState(false);
  const countRef = useRef(null);

  const tick = () => {
    if (mins === 0 && secs === 0) {
      alert('Tiempo finalizado: ' + name);
      console.log(id)
      handleFinish(id);
      resetTimer();
      
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  const resetTimer = () => {
    
    setStart(false);
    setTime([parseInt(minutes), parseInt(seconds)]);
    if (countRef.current !== null) {
      clearInterval(countRef.current);
    }
  };

  useEffect(() => {
    if (start) {
      countRef.current = setInterval(() => {
        tick();
      }, 1000);
      return () => clearInterval(countRef.current);
    }
  });

  function handleStart() {
    setStart(true);
  }

  function handleStop() {
    clearInterval(intervalId);
    setStart(false)
  }

  return (
    <div className={create ? "container": "container-items"}>
      <div className="header">

        {create ?
          null:
          <>
            <h2>{name}</h2>
            <Button onClick={() => handleFinish(id)} variant="danger">
              <span aria-hidden="true">&times;</span>
            </Button>
          </>

        }

      </div>

        <div className="items">
          {secs < 10 ? 
            <h1 className="display-1"> {mins}:0{secs} </h1> : 
            <h1 className="display-1"> {mins}:{secs} </h1>
          }

        {create ?
          null :
          (mins + 1)/minutes * 100 > 100 ? 
          
          <ProgressBar percentage={100} maxValue={1}/> :
          <ProgressBar percentage={Math.trunc((mins + 1)/minutes * 100)}/>
        }
        </div>
        <div className="buttons">
          {create?
              null : start ?
              <Button variant="danger" onClick={handleStop}>Stop</Button>:
              <>
                <Button variant="success" onClick={handleStart}>Start</Button>{' '}
                <Button variant="danger" onClick={resetTimer}>Reset</Button>{' '}
              </>
              
            }
        </div>

      
    </div>

    

  );
}


