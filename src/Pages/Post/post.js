import React from 'react'
import './post.css'
import blogs from '../../Blogs/blogs.json'
import PostCard from '../../Components/postCard/PostCard'
import { Button } from '../../Components/Button/Button.style'
import { useNavigate,useLocation,useParams} from 'react-router-dom'
import {BiPurchaseTagAlt} from "react-icons/bi"

export default function Post() {
  const tag_list=['test1','test2','test3'] // tag_list

  let location=useLocation();
  let navigate=useNavigate();
  let {tag}=useParams(); //parameters from url

  const sort_json=(json)=>{
    const time_to_int=(string)=>{
      const s=string.split('/')
      const new_s=s[2]+s[0]+s[1]
      return parseInt(new_s)
    }
    let json_arr=Object.keys(json).map((key)=>json[key])
    json_arr.sort((a,b)=>time_to_int(b.creat_time)-time_to_int(a.creat_time))
    return json_arr
  }
  return (
    <div>
      {/* the main post page */}
      {location.pathname==='/post'&&
      <div className='post-container'>
        <div className='tag-menu'>
          <span>Blog tags</span> 
          {(tag_list).map((tag,key)=>
            <Button key={key} 
                    padding={"8px 15px"}
                    font_size={"15px"} 
                    onClick={()=>{
                      let path=`/post/${tag}`;
                      navigate(path)}}>{tag}
            </Button>
          )}
        </div>
        <div className='post-list'>
          {sort_json(blogs).map((data,key)=><PostCard key={key} title={data.title} date={data.creat_time} tags={data.tag} file_name={data.file_name}/>)}
        </div>
      </div>}

      {/* tag page */}
      {location.pathname===`/post/${tag}`&&
      <div className='post-container'>
        <div className='tag-menu'>
          <span>Blog tags</span> 
          {(tag_list).map((tag,key)=>
            <Button key={key} 
                    padding={"8px 15px"} 
                    font_size={"15px"}
                    onClick={()=>{
                      let path=`/post/${tag}`;
                      navigate(path)}}>{tag}
            </Button>)}
            <div className='tag_title'><BiPurchaseTagAlt className='tag_icon'/><span>{tag}</span></div>
        </div>
        <div className='post-list'>
          {sort_json(blogs).map((data,key)=> 
            data.tag.includes(tag)&&  //filter based on tag
            <PostCard key={key} title={data.title} date={data.creat_time} tags={data.tag} file_name={data.file_name}/>
            )}
        </div>
      </div>}
        
      
    </div>
  )
}
