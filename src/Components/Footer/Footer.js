import React from 'react'
import { useLocation,Link} from 'react-router-dom'
import { BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";
import styled from 'styled-components';

import "../Footer/footer.css"


export default function Footer() {
  let location = useLocation();
  return (
    <div className='footer'>
      <div className='iconList'>
          <a href='https://www.youtube.com/channel/UCxyic1BkqjQHIb1nuxpAOeg' target="_blank" rel="noreferrer"><BsYoutube /></a>
          <a href='https://www.instagram.com/kisaragi.z/' target="_blank" rel="noreferrer"><BsInstagram/></a>
          <a href='https://github.com/kisaragiRY' target="_blank" rel="noreferrer"><BsGithub/></a>
      </div>
      <div>
        Copyright © 2020 - 2023, designed + developed by Isra.Z
      </div>

    </div>
  
  )
}
