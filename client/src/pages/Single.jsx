import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'


const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <div className='content'>
            <img src='' />
        </div>
        <div className='user'> 
            <img src='' />
        </div>
        <div>
            <span>xx</span>
            <p>xxyear xxmonth  xxday</p>
        </div>
        <div className='edit'>
           <Link to={'/write'}>
            <img src={Edit} alt="" />
           </Link> 
            <img src={Delete} alt="" />
        </div>
        <h1>xxx xxxxxx xxxxxxxxxx xx</h1>
        <p>Thank you for this wonderful tutorial. It is a great start! I've been doing either front-end or back-end projects, but now I see how it all works together. I had a bit of trouble with the database (because I have never learned about it), but pushed through anyways.


</p>
      </div>
      <div className="menu">m</div>
     </div>
  )
}

export default Single
