import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";

import { sort_json } from '../../Helpers/utils'
import { useTransitionNavigate } from '../../Helpers/Transition/useTransitionNavigate';
import blogs from '../../Blogs/blogs.json'
import './home.css'
import './profileimg.css'
import './recent-article.css'
import './currenttime.css'


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
            <div className='homebox-wrapper profileimg'>
              <p>Isra</p>
            </div>
          </a>
          <div className='homebox-wrapper currenttime'>
            <p>{date.getHours() + " : " + date.getMinutes()}</p>
            <p>GMT + 9</p>
            <p>Tokyo, Japan</p>
          </div>
        </section>
        <section>
        <div className='homebox-wrapper recent-article'>
          <p><a onClick={() => transitionNavigate("/post", "slide-to-right")}>Latest Posts</a></p>
          <div className='list-container'>
            {sort_json(blogs).slice(0,4).map((article,key)=>
            <div key={key} className='article-card'>
              <div>0{key+1}</div>
              <div>
                <Link to={{pathname:`/post/${btoa(article.file_name)}`}}>
                  {article.title}
                </Link>
                </div>
            </div>)}
          </div>
        </div>

        </section>
      </section>
    </div>
  )
}
