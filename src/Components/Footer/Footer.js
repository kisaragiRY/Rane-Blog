import React from 'react'
import "../Footer/footer.css"
import { useLocation,Link} from 'react-router-dom'


export default function Footer() {
  let location=useLocation();
  return (
    
    <div className='footer'>
      
      {(location.pathname==='/')| (location.pathname==='/about') &&
        <div className='home-footer'>
          {/* <img src='https://res.cloudinary.com/kisaragiry/image/upload/v1661079193/raneblog.com/Untitled_64_o5gmom.png'></img> */}
          <div className='home-footer-left'>
            <h3>Rane's blog</h3>
            <p>This this Rane's official blog where she writes about 
              Math, Statistics, Machine Learning and other random thoughts.</p>
          </div>

          <div className='home-footer-right'>
            <div className='contact'>
              <h3>get in touch</h3>
              <p><a href='https://www.instagram.com/kisaragi.z/' target="_blank">instagram</a></p>
              <p><a href='https://github.com/kisaragiRY' target="_blank">github</a></p>
            </div>

            <div className='nav'>
              <h3>explore</h3>
              <p><Link to='/post'>post</Link></p>
            </div>
          </div>
          
        </div>
      }
      <span>Copyright © 2022 Rane.Z</span>
    </div>
  
  )
}
