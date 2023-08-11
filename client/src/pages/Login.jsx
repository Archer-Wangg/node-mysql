import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    username:'',
    email: '',
    password: '',
  });

  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
       setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  
  const handleClick = async(e) => {
     e.preventDefault();
     try {
       await axios.post('http://localhost:8800/login', input, {withCredentials: true});
       navigate('/');
     } catch(err) {
       setErr(err.response.data);
     }
    
  }
   
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
