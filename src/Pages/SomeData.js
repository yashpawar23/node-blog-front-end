import React, { useEffect, useState } from 'react'

const SomeData = () => {
    const [Data,setData]=useState()
    useEffect(()=>{
          fetch("http://localhost:4005/")
          .then((res)=>res.json())
          .then((res)=>setData(res))
    },[])
    console.log(Data)
  return (
    <div>SomeData</div>
  )
}

export default SomeData