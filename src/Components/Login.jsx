import { FaLock, FaUser } from 'react-icons/fa';

import { useState } from 'react';
import './Login.css';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert('Sending data: ' + username + ' - ' + password);
    };

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Login to your account</h1>
            <div className='input-area'>
                <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)}/>
                <FaUser className='icon'/>
            </div>
            <div className='input-area'>
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className='icon'/>
            </div>

            <div className='recall-forget'>
                <label htmlFor="">
                    <input type="checkbox" />
                    Remember me!
                </label>
                <a href="">Forgot your password</a>
            </div>

            <button>Enter</button>

            <div className='sign-link'>
                <p>
                    Don`t have an account? <a href="">Register</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login;