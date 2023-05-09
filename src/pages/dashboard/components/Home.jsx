import { Link } from 'react-router-dom'
import '../styles/Home.css'
import React from 'react'

 const Home = () => {
  return (    
    <div className='homeContainer'>
       <nav className='top'>
        <label className='logo'>TB</label>
          <ul className='subtop'>   
            <li className='active'><Link to='/' className='home'>Home</Link></li> 
            <li><Link href='#' className='feature'>Feature</Link></li>
            <li><Link to='/SignIn' className='signin'>SignIn</Link></li>
            <li><Link to='/SignUp' className='singup'>SignUp</Link></li>
            <li><a href='https://semicolon.africa/about' target='_blank'  className='singup'>About</a></li>
          </ul>
      </nav>
        <div >
        <div className="lds-dual-ring"></div>
        <div className='hello'>Hello</div>
        <div className='learn'>Click <span>
        <a href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/menstrual-cycle" target='_blank' className="here">here</a>
        </span> to learn more about menstruation</div>
        
    </div>
    <div className='sideImg'>Check Your Next Menstrual Date</div>
    <Link to='/checkDate' className='check'>
        <button className='continue'> Continue </button>
    </Link>
    </div>
 
  );
};
export default Home;