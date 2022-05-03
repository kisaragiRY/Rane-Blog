import React,{useEffect, useState} from 'react'
import Markdown from 'markdown-to-jsx'

import './about.css'

export default function About() {
  const file_name="about.md"
  const [post,setPost]=useState('')

  useEffect(()=>{
    import(`../../Blogs/${file_name}`)
      .then(res=>{
        fetch(res.default)
          .then(res=>res.text())
          .then(res=>setPost(res))
      })
      .catch(err=>console.log(err));
  })
  return (
    <div className='about-container'>
      <div className='about-title'>
        <span>About Me</span>
      </div>
      <div className='about-post'>
        <Markdown>{post}</Markdown>
      </div>
    </div>
  )
}
