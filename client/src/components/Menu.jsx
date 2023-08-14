import React from 'react'

export default function Menu() {
  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(() => (
         <div className='post' id=''>
            <img src="" alt="" />
            <h2>{}</h2>
            <button>Read More</button>
         </div>
      ))}
    </div>
  )
}
