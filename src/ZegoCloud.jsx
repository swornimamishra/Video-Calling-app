import React, { useState,useCallback } from 'react'
import { useNavigate } from 'react-router-dom';


function ZegoCloud() {
    const [value, setValue] = useState("");
    const navigate = useNavigate()

    const joinRoom = useCallback(
        ()=>{
        navigate(`/room/${value}`)
        },[navigate,value],
    )
  return (
    <>
    <input type='text' placeholder='Enter Room Id' onChange={(e)=>setValue(e.target.value)}></input>
    <button onClick={joinRoom}>JOIN</button>
    </>
  )
}

export default ZegoCloud