import React from 'react'
import {useState} from 'react';
function Counting() {


    const [count , setcount]=useState(0)

    const increment=()=>{
        setcount( count +1)

    }
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={increment} > increment</button>
    </div>
  )
}

export default Counting
