import React from 'react'
import './App.css'
function Contact({submitbtn,contact,email }) {
  return (
    <>
    <div className='flex min-h-screen items-center justify-center p-4'>
    <div className= 'flex flex-col bg-blue-300  m-25 p-16 w-full h-auto max-w-md justify-center items-center   rounded-3xl hover:scale-105 shadow-xl  shadow-blue-800 cursor-pointer'>
    <form onSubmit={submitbtn}>
        <input onChange={email} type="text"  placeholder='email' className='bg-white m-2 p-2 gap-2 rounded-2xl text-black outline-none'/>
        <input onChange={contact} type="text" placeholder='Contact'  className='bg-white rounded-2xl  m-2 p-2 gap-2 text-black outline-none'/>
        <button type='submit'className='bg-blue-600 rounded-xl p-2 m-2 gap-2 hover:scale-110'>Sign up</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Contact