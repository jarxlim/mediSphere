import React from 'react';
import "./LoginForm.scss"
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const LoginForm = () => {
    const { login } = useContext(AuthContext);
  
    const handleLogin = () => {
      login();
    };
   

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>MediSphere</h1>
            <p>In addition to networking, Medisphere also offers telemedicine services, allowing users to engage in online consultations with qualified healthcare providers.
            </p>
            <p>
            Whether you're seeking professional connections, seeking advice, or looking to procure essential medical supplies, Medisphere provides the ideal environment for fostering professional growth, collaboration, and community within the healthcare industry."
          </p>
    
          <span>New to MediSphere? </span>
          <Link to="/register">
          <button> Create an account</button>
          </Link>
        </div>
        <div className="right">
          <h1>Welcome to your community hub</h1>
          <form action="">
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
