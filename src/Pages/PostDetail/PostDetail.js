import React,{useEffect,useState} from 'react'
import './postdetail.css'
import blogs from '../../Blogs/blogs.json'
import { blog_id_to_blog } from '../../Helpers/utils'
import 'katex/dist/katex.min.css'
import Markdown from '../../Components/Markdown/Markdown'
import "../../Components/Markdown/markdown.css"
import { Button } from '../../Components/Button/Button.style'
import { useNavigate} from 'react-router-dom'
import TableOfContents from '../../Components/TableOfContents/tableOfContents'

export default function PostDetail(props) {
    const file_name=atob(props.blog_id)
    const [post,setPost]=useState('')
    let navigate=useNavigate();

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
        {/* {console.log(blog_id_to_blog(blogs,file_name)[0].title)} */}
        <div className='post-info'>
            <span>{blog.title}</span>
            <span>{blog.creat_time}</span>
            {(blog.tag).map((tag,key)=>
            <Button key={key} 
                    padding={".1em .3em"}
                    font_size={".8em"} 
                    onClick={()=>{
                      let path=`/post/tag/${tag}`;
                      navigate(path)}}>{tag}
            </Button>
            )}
        </div>
        <div className='post-content'>
            <div className='post-detail'>
                <Markdown className='markdown' content={post}/>
            </div>
            <TableOfContents/>
        </div>

    </div>
  )
}
