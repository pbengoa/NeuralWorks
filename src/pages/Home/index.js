import React, {useState} from "react";
import Timer from "../../components/timer";
import InputName from "../../components/inputName";
import { Button } from "react-bootstrap";
import OptionButton from "../../components/optionButton";
import '../../styles/home.css'
import ListTimers from "../../components/listTimers";


export default function Home() {
  const [name, setName] = useState('');
  const [time, setTime] = useState(25);
  const [timers, setTimers] = useState([])
  const [task, setTask] = useState('');

  const handleAddTimer = (event) => {
    event.preventDefault();
    const newId = timers.length > 0? timers[timers.length - 1].id + 1 : 1;
    setTimers([...timers, { id: newId, minutes: time, seconds: 0, name: name, task: task }]);
  };

  const handleRemoveTimer = (id) => {
      setTimers(timers.filter((timer) => timer.id !== id));
  };

  const handleTime = (value) => {
    setTime(value);
  };


  return (
    <div className="app">
      <div className="timer-container">
        <OptionButton time={time} handleTime={handleTime} />
        {
          time === 25 ?
          <Timer  minutes={25} seconds={0} create={true} />
          :
          null
        }
        {
          time === 5 ?
          <Timer  minutes={5} seconds={0} create={true} />
          :
          null
        }
        {
          time === 15 ?
          <Timer  minutes={15} seconds={0} create={true} />
          :
          null
        }
       
        <InputName setInput={setName} phrase={"Nombre trabajador"}/>
        <InputName setInput={setTask} phrase={"Tarea a realizar"}/>
        <Button onClick={handleAddTimer} variant="primary">Add Timer</Button>

      </div>
      <div className="line"></div>
      <div className="timers">
        <ListTimers timers={timers} handleFinish={handleRemoveTimer} />
      </div>
    </div>


  );
}