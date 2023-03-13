import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form action="">
        <label className='form-label' htmlFor="username">UserName</label><br />
        <input className='form-input' type="text" placeholder='Username' /> <br />
        <label className='form-label' htmlFor="password">Password</label><br />
        <input className='form-input' type="password" placeholder='pasword' /> <br />
        <button className='btn'>Log In</button>
      </form>
    </div>
  )
}

export default Contact