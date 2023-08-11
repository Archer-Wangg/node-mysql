import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [err, setErr] = useState(null)
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
     const res = await axios.post('http://localhost:8800/register', input);
     navigate('/login');
    } catch (err) {
      setErr(err.response.data);
    }
    
  }
  return (
    <div className='auth'>
       <h1>Register</h1>
         <form>
            <input required type='text' placeholder='usename' name='username' onChange={handleChange}></input>
            <input required type='email' placeholder='email' name='email' onChange={handleChange}></input>
            <input required type='password' placeholder='password' name='password' onChange={handleChange}></input>
            <button onClick={handleClick}>Register</button>
            {err && <p>{err}</p>}
            <span>Do you have an account? <Link to='/login'>Login</Link> </span>
         </form>      
    </div>
  )
}

export default Register
