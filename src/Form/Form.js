import React from 'react'
import { useState } from 'react';

const Form = () => {
    const[data,setData]=useState({name:'',email:'',phone:'',message:''})
    const handleChange=(e)=>{
        const name= e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value})
    }
    const handelSumbit=(e)=>{
       e.preventDefault()
      
    }
  return (
    <div className='main-form' >
   <form method='post' onSubmit={handelSumbit}>
    <h1>Contact <span>Us</span></h1>
    <input type='text' name='name'id='' onChange={handleChange} value={data.name} placeholder='Enter name'/>
    <input type='email' name='email'id='' onChange={handleChange} value={data.email}  placeholder='example@gmail.com'/>
    <input type='phone' name='phone'id='' onChange={handleChange} value={data.phone}  placeholder='+91'/>
    <textarea name='message' id='' cols='30' onChange={handleChange} value={data.message}  rows='10' placeholder='Type here...'/>
    <button type='submit'>Send</button>
    <p>{data.name}, {data.email}, {data.phone}, {data.message}</p>

   </form>
   </div>
  )
}

export default Form;
