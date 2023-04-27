
import React from 'react'
import Timer from '../timer'
import '../../styles/listTimers.css'

export default function ListTimers({timers, handleFinish}) {
  console.log(timers)  
  return (
      <div className='timers'>
          {timers.map((timer) => (
            <div className='item'>
              <Timer 
                key={timer.id}
                id={timer.id} 
                minutes={timer.minutes} 
                seconds={timer.seconds} 
                name={timer.name} 
                task={timer.task}
                handleFinish={handleFinish} 
              />
            </div>
          ))}
      </div>
    )
}