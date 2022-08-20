import React,{useEffect, useState} from 'react'
import Markdown from '../../Components/Markdown/Markdown'
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
        <Markdown content={post} />
      </div>
    </div>
  )
}
