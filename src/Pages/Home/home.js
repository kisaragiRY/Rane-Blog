import React from 'react'
import './home.css'
import blogs from '../../Blogs/blogs.json'
import { sort_json } from '../../Helpers/utils'
import { Link } from 'react-router-dom'
import Window from '../../Components/Window/window'

export default function Home() {
  const recent_ariticle_content = (
    <div className='recent-article'>
      <h2>Recent Articles</h2>
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
  )

  const about_me_content = (
    <div className='about-me'>
      
    </div>
  )

  const services_content = (
    <div className='services'>
      
    </div>
  )
  return (
    <div className='home-wrapper'>
        <div className='home-intro'>
            <span>Rane's Blog</span>
            <span>Rane's Blog</span>
            <span>Rane's Blog</span>
            <span>Rane's Blog</span>
            <div className='quick-links-wrapper'>
              <li ><Link to='/post' >Post</Link></li>
              <li><Link to='/' >Service</Link></li>
              <li><Link to='/about' >About</Link></li>
            </div>
        </div>
        <div className='interface'>
          <Window 
            window_width = '30rem'
            window_name = 'recent_article.html'
            window_content = {recent_ariticle_content}
            window_start_top = '5vw'
            window_start_left = '20vw'
            />

          <Window 
            window_width = '30rem'
            window_name = 'about_me.html'
            window_content = {about_me_content}
            window_start_top = '10vw'
            window_start_left = '46vw'
            />

          <Window 
            window_width = '30rem'
            window_name = 'services.html'
            window_content = {services_content}
            window_start_top = '30vw'
            window_start_left = '2vw'
            />
        
        </div>
    </div>
  )
}
