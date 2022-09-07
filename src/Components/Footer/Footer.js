import React from 'react'
import "../Footer/footer.css"
import { useLocation,Link} from 'react-router-dom'


export default function Footer() {
  let location=useLocation();
  return (
    <div className='footer'>
      {((location.pathname==='/') || (location.pathname==='/about')) &&
        <div className='home-footer'>
          <div className='home-footer-left'>
            <h3>Rane's blog</h3>
            <p>This is Rane's blog website where she writes about 
              Math, Statistics, Machine Learning and other thoughts that come along.</p>
          </div>

          <div className='home-footer-right'>
            <div className='contact'>
              <h3>get in touch</h3>
              <p><a href='https://www.instagram.com/kisaragi.z/' target="_blank" rel="noreferrer">instagram</a></p>
              <p><a href='https://github.com/kisaragiRY' target="_blank" rel="noreferrer">github</a></p>
            </div>

            <div className='nav'>
              <h3>explore</h3>
              <p><Link to='/post'>Post</Link></p>
              <p><Link to='/about'>About</Link></p>
            </div>
          </div>
        </div>
      }
      <span>Copyright © 2022 Rane.Z</span>
    </div>
  
  )
}
