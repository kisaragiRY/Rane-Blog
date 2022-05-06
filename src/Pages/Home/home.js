import React from 'react'
import './home.css'
import blogs from '../../Blogs/blogs.json'
import { sort_json } from '../../Helpers/utils'
import PostCard from '../../Components/postCard/PostCard'

export default function Home() {
  return (
    <div>
        <div className='home-quote'>
            <span>sup, I'm up</span>
        </div>
        <div className='recent-article'>
          <h2>Recent Articles</h2>
          <div className='list-container'>
            {sort_json(blogs).slice(0,4).map((article,key)=>
            <div key={key} className='article-card'>
              <span>0{key+1}</span><span><a href='#'>{article.title}</a></span>
            </div>)}
          </div>
        </div>
    </div>
  )
}
