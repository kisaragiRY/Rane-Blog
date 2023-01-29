import React from 'react'
import "../Footer/footer.css"
import { useLocation,Link} from 'react-router-dom'


export default function Footer() {
  let location=useLocation();
  return (
    <div className='footer'>
      {((location.pathname==='/') || (location.pathname==='/about') || (location.pathname==='/service')) &&
        <div className='home-footer'>
          <div className='home-footer-left'>
            <h3>Get in touch</h3>
              <p>rane.z.blog@gmail.com</p>
              <p>website designed・developed by Rane.Z</p>
          </div>

          <div className='home-footer-right'>
            <div className='nav'>
              <h3>explore</h3>
              <p><Link to='/post'>Post</Link></p>
              <p><Link to='/about'>About</Link></p>
            </div>

            <div className='contact'>
              <h3>find me</h3>
              <p><a href='https://www.youtube.com/channel/UCxyic1BkqjQHIb1nuxpAOeg' target="_blank" rel="noreferrer">YouTube</a></p>
              <p><a href='https://www.instagram.com/kisaragi.z/' target="_blank" rel="noreferrer">Instagram</a></p>
              <p><a href='https://github.com/kisaragiRY' target="_blank" rel="noreferrer">GitHub</a></p>
            </div>

          </div>
        </div>
      }
      <span>Copyright © 2020 - 2023 Rane.Z</span>
    </div>
  
  )
}
