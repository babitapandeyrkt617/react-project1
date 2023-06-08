import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='main-header'>
    <div className='pic'>
      <img src='./images/convert.png'/>
      </div>
      <ul className='item'>
      <Link to="/"><li><a href="#">Home</a></li></Link>
       <Link to="/courses"><li><a href="#">Courses</a></li></Link> 
        <Link to="/contact-us"><li><a href="#">contact us</a></li></Link>
        <li><a href="#">login</a></li>
      </ul>
      </div>
   
  )
}

export default Header;