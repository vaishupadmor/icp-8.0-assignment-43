import React from 'react'
import Imghome from './../../common-assest/home.png'
import "./homebutton.css";
import {Link} from 'react-router-dom';

function homebutton() {
  return (
    
    <Link to='/'>
    <img src={Imghome} alt="home" className='home-img' />
    </Link>   

)
}

export default homebutton