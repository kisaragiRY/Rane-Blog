import React from 'react'
import '../Error/error.css'

export default function Error() {
  return (
    <div className='error-container'>
      <img 
        src='https://res.cloudinary.com/kisaragiry/image/upload/v1661079193/raneblog.com/Untitled_64_o5gmom.png'
        alt='error-page-duck'
        >
      </img>
      <h1>404</h1>
      <p>The page you are looking for does not exist. </p>
    </div>
  )
}
