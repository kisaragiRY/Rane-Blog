import React from 'react'
import './home.css'
import blogs from '../../Blogs/blogs.json'
import { sort_json } from '../../Helpers/utils'
import { Link } from 'react-router-dom'

export default function Home() {
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
        </div>
    </div>
  )
}
