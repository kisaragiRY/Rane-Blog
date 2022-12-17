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
            <h3>Let's Be Friends</h3>
            <form className='email-form'>
                <input type='text' id='name' placeholder='name' />
              <div>
                <input type='email' id='email' placeholder='email'/>
                <button>OK</button>
              </div>
              
            </form>
          </div>

          <div className='home-footer-right'>
            <div className='nav'>
              <h3>explore</h3>
              <p><Link to='/post'>Post</Link></p>
              <p><Link to='/'>Services</Link></p>
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
      <span>Copyright © 2022 Rane.Z</span>
    </div>
  
  )
}
