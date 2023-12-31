import React,{useEffect,useState} from 'react'
import './postcard.css'
import { TagButton } from '../Button/TagButton.style'
import { useNavigate,Link} from 'react-router-dom';

export default function PostCard(props) {
    let navigate=useNavigate();
    
    const file_name=props.file_name;
    const [post,setPost]=useState('')


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
    <div className='card-container'>
        <h2><Link to={{pathname:`/post/${btoa(props.file_name)}`}}>{props.title}</Link></h2>
        <p className='abstract'>{props.description}</p>
        {/* {post.substring(0,150)} ... */}
        <span>{props.date}</span>
        {(props.tags.map((tag,key)=>
            (tag!=='')&&
                    <TagButton 
                      key={key} 
                      bgColor={"red"}
                      padding={"1px 5px"}
                      font_size={"12px"} 
                      onClick={()=>{
                          let path=`/post/tag/${tag}`;
                          navigate(path)}}>{tag}
                    </TagButton>
        ))}
    </div>

  )
}
