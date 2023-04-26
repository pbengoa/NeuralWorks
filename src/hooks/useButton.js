import { useState } from "react";

export default function useButton() {
  
  const [pomodoro, setPomodoro] = useState(true);
  const [shortBreak, setShortBreak] = useState(false);
  const [longBreak, setLongBreak] = useState(false);

  const handlePomodoro = () => {
    setPomodoro(true);
    setShortBreak(false);
    setLongBreak(false);
    
  };

  const handleShort = () => {
    setPomodoro(false);
    setShortBreak(true);
    setLongBreak(false);
    
  };

  const handleLong = () => {
    setPomodoro(false);
    setShortBreak(false);
    setLongBreak(true);
    
  };

  return {
    pomodoro, shortBreak, longBreak,
    handlePomodoro, handleShort, handleLong,
  }
}