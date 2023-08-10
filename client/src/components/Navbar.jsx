import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
       <div className='container'>
          <div className='logo'>
            <img src={Logo} />
          </div>
          <div className='links'>
            <Link className='link' to='/?cat=art'>
                <h6>ART</h6>
            </Link>
            <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
            </Link>
            <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
            </Link>
            <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
            </Link>
            <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
            </Link>
            <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
            </Link>
            <span>John</span>
            <span>Logout</span>
            <span className='write'>
              <Link to='/write' className='link'>Write</Link>
            </span>
          </div>
       </div>
    </div>
  )
}
