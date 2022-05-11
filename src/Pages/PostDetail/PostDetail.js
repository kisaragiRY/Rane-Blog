import React,{useEffect,useState} from 'react'
import Markdown from 'markdown-to-jsx'
import './postdetail.css'
import blogs from '../../Blogs/blogs.json'
import { blog_id_to_blog } from '../../Helpers/utils'
import Latex from '../../Components/Latex/Latex'

import { PreBlock } from '../../Components/codeBlock/CodeBlock'

export default function PostDetail(props) {
    const file_name=atob(props.blog_id)
    const [post,setPost]=useState('')

    const blog=blog_id_to_blog(blogs,file_name)[0]
    useEffect(()=>{
        import(`../../Blogs/Posts/${file_name}`)
            .then(res=>{
            fetch(res.default)
                .then(res=>res.text())
                .then(res=>setPost(res))
            })
            .catch(err=>console.log(err));
        })
  return (
    <div className='post-wrapper'>
        {console.log(post)}
        <h1>{blog.title}</h1>
        <Markdown 
            className='markdown'
            children={post} 
            options={{
                overrides:{
                    Latex:Latex,
                    pre:PreBlock
            }
            }}/>
    </div>
  )
}
