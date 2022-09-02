import React from 'react'
import "../Footer/footer.css"
import { useLocation} from 'react-router-dom'


export default function Footer() {
  let location=useLocation();
  return (
    
    <div className='footer'>
      
      {location.pathname==='/'&&
        <div className='home-footer'>
          <hr/>
          <h3>Rane's blog</h3>
          <p>A blog that's about </p>
        </div>
      }
      <span>Copyright © 2022 Rane.Z</span>
    </div>
  
  )
}
