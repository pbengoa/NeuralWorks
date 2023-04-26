
import React from 'react'
import Timer from '../timer'
import '../../styles/listTimers.css'

export default function ListTimers({timers, handleFinish}) {
    return (
      <div className='timers'>
          {timers.map((timer) => (
            <div className='item'>
              <Timer 
                id={timer.id} 
                minutes={timer.minutes} 
                seconds={timer.seconds} 
                name={timer.name} 
                handleFinish={handleFinish} 
              />
            </div>
          ))}
      </div>
    )
}