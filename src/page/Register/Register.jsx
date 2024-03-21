import React from 'react';
import "./register.scss"
import { Link } from 'react-router-dom'

const Register = () => {

  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>MediSphere</h1>
          <p>
            "Welcome to Medisphere, your premier destination for connecting with fellow healthcare professionals and enthusiasts worldwide. Designed as a dedicated social network for the medical community, Medisphere provides a secure platform where doctors, nurses, researchers, and other healthcare professionals can come together to share knowledge, collaborate on research, discuss medical advancements, and network with peers in their field.
          
          </p>
    
          <span>Already on MediSphere? </span>
          <Link to="/login">
          <button>Sign in</button>
          </Link>
        </div>
        <div className="right">
          <h1>Join Us Today</h1>
          <form action="">
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
