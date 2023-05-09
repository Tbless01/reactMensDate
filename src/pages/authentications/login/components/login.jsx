import'../styles/login.css'
import { Link } from 'react-router-dom'
import React from 'react'

 const Login = () => {  
  return (
    <div className='mainContainer'>
     <nav className='top'>
        <label className='logo'>TB</label>
          <ul className='subtop'>   
            <li><Link to='/' className='home'>Home</Link></li> 
            <li><a href='#' className='feature'>Feature</a></li>
            <li className='active'><Link to='/SignIn' className='signin'>SignIn</Link></li>
            <li><Link to='/SignUp' className='singup'>SignUp</Link></li>
            <li><a href='https://semicolon.africa/about' target='_blank'  className='singup'>About</a></li>
          </ul>
      </nav>
      <div class="lds-dual-ring"></div>
<div action="" class="container">
  <div class="input-container">
      <div class="input-content">
          <div class="input-dist">
              <div class="input-type">
                <input type="text" placeholder="Username" required="" className="input-is"/>
                <input type="password" placeholder="Password" required="" className="input-is"/>
              </div>
          </div>
      </div>
  </div>
</div>

    </div>
);
};
export default Login;