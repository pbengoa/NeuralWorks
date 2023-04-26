import React from 'react';
import { Button } from "react-bootstrap";

export default function OptionButton({time, handleTime}){
  return (
    <div>
      <Button variant='light' className={time === 25 ? "active":"disable"} onClick={() => handleTime(25)}>Pomodoro</Button>{' '}
      <Button variant='light' className={time === 5 ? "active":"disable"} onClick={() => handleTime(5)}>Short break</Button>{' '}
      <Button variant='light' className={time === 15 ? "active":"disable"} onClick={() => handleTime(15)}>Long break</Button>{' '}
    </div>
  )

}