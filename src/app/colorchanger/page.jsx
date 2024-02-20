"use client"

import React, { useState } from 'react'

export default function ColorPicker() {

    const [color , setColor] = useState("FFFFFF")

    function handleColorChange(event){
        setColor(event.target.value)
    }

  return (
    <div className='color-picker-container flex flex-col items-center'>
      <h1 className='m-14 text-5xl font-bold'>Color Picker</h1>
      <div className='color-display w-72 h-72 flex justify-center items-center border-2 border-black rounded-3xl mb-7 ease-linear' style={{background: color}}>
        <p className='font-semibold text-2xl'>Selected Color:{color}</p>
      </div>
      <label className='text-3xl font-bold mb-3'>Select a Color:</label>
      <input type='color' value={color} onChange={handleColorChange}></input>
    </div>
  )
}
