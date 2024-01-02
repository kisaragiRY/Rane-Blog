import React, {useEffect, useState} from 'react'
import { 
  BsYoutube, BsInstagram, BsGithub,
} from "react-icons/bs";

import { useTransitionNavigate } from '../../Helpers/Transition/useTransitionNavigate';
import './home.css'
import { ProfileImgBox, CurrentTimeBox} from './styles/index'
import { SkillsBox } from './skillsbox';


export default function Home() {
  const [date, setDate] = useState(new Date());
  const { transitionNavigate } = useTransitionNavigate();

  useEffect(()=>{
    var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
  })

  const slogan = ["Refine", "Adapt", "Navigate", "Explore"]

  return (
    <div className='home-wrapper'>
      <section className='home-left'>
        {
          slogan.map((item, iid) => {
            return <p key={iid} className='home-slogan'>{item}</p>
          })
        }
        <p id='title'>BLOG</p>
        <div className='icon-list'>
          <a href='https://www.youtube.com/channel/UCxyic1BkqjQHIb1nuxpAOeg' target="_blank" rel="noreferrer"><BsYoutube /></a>
          <a href='https://www.instagram.com/kisaragi.z/' target="_blank" rel="noreferrer"><BsInstagram/></a>
          <a href='https://github.com/kisaragiRY' target="_blank" rel="noreferrer"><BsGithub/></a>
        </div>
      </section>


      <section className='home-right'>
        <section>
            <a onClick={() => transitionNavigate("/about", "slide-to-right")}>
              <ProfileImgBox className='homebox-wrapper'>
                  <p>Isra</p>
              </ProfileImgBox>
            </a>
            <CurrentTimeBox className='homebox-wrapper'>
              <p>{date.getHours() + " : " + date.getMinutes()}</p>
              <p>GMT + 9</p>
              <p>Tokyo, Japan</p>
            </CurrentTimeBox>
        </section>
        <section>
        <SkillsBox />

        </section>
      </section>
    </div>
  )
}
