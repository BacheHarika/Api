import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Axios = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get(
       "https://64dda9f8825d19d9bfb15916.mockapi.io/crud"
      )
    .then(     
       respone=>setData(respone.data)
     
    )
    .catch(error => console.error("Error fetching data:", error));
  },[])
  return (
   <>
   <h1>API'S</h1>   
{ data && data.map(item=>{
  <li key={item.id}>{item.name}</li>
  console.log(item)
})}
   </>
  )
}

export default Axios