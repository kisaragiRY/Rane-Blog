import React,{useEffect,useState} from 'react'
import './postcard.css'
import { Button } from '../Button/Button.style'
import { useNavigate} from 'react-router-dom';

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
        <h2>{props.title}</h2>
        <p className='abstract'>{post.substring(0,150)} ...</p>
        <span>{props.date}</span>
        {(props.tags.map((tag,key)=>
            (tag!=='')&&
                    <Button 
                      key={key} 
                      padding={"1px 5px"}
                      font_size={"12px"} 
                      onClick={()=>{
                          let path=`/post/${tag}`;
                          navigate(path)}}>{tag}
                    </Button>
        ))}

    </div>

  )
}
