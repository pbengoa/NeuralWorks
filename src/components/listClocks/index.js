
import React, { useState } from 'react'
import Timer from '../clocks'
import '../../styles/listTimers.css'

export default function ListClocks({timers, handleFinish}) {
    console.log(timers)
    return (
      <div className='timers'>
          {timers.map((timer) => (
            <div className='item'>
              <Timer id={timer.id} minutes={timer.minutes} seconds={timer.seconds} name={timer.name} handleFinish={handleFinish} />
            </div>
          ))}
      </div>
    )
}