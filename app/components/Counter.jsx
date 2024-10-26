"use client"

import { useState } from "react"

export default function Counter()
{
    const [counter,setCounter]=useState(0)
    return(
        <>
            <button onClick={()=>setCounter(prev => prev+1)}>Clicked {counter} times!</button>
        </>
    )
}