import React from 'react'
import { useLocation} from 'react-router-dom'
import { BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";
import styled from 'styled-components';

const FooterWrapper = styled.div`
  padding: 1em 0;
  text-align: center;

.iconList a{
    padding: 1em;
    font-size: 1.5em;
}
`

export default function Footer() {
  let location = useLocation();
  return (
    <FooterWrapper >
      <div className='iconList'>
          <a href='https://www.youtube.com/channel/UCxyic1BkqjQHIb1nuxpAOeg' target="_blank" rel="noreferrer"><BsYoutube /></a>
          <a href='https://www.instagram.com/kisaragi.z/' target="_blank" rel="noreferrer"><BsInstagram/></a>
          <a href='https://github.com/kisaragiRY' target="_blank" rel="noreferrer"><BsGithub/></a>
      </div>
      <div>
        Copyright © 2020 - 2024 Isra.Z
      </div>

    </FooterWrapper >
  
  )
}
