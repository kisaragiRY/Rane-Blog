import React from 'react'
import './post.css'
import blogs from '../../Blogs/blogs.json'
import PostCard from '../../Components/postCard/PostCard'
import { Button } from '../../Components/Button/Button.style'
import { useNavigate,useLocation,useParams} from 'react-router-dom'
import {BiPurchaseTagAlt} from "react-icons/bi"
import { sort_json} from '../../Helpers/utils'
import PostDetail from '../PostDetail/PostDetail'
import {TAG_LIST} from '../../Helpers/const'

export default function Post() {
  // const tag_list=['test1','test2','test3'] // tag_list

  let location=useLocation();
  let navigate=useNavigate();
  let {tag,blog_id}=useParams(); //parameters from url

  return (
    <div>
      {/* the main post page */}
      {location.pathname==='/post'&&
      <div className='post-container'>
        <div className='tag-menu'>
          <span>Blog tags</span> 
          {(TAG_LIST).map((tag,key)=>
            <Button key={key} 
                    padding={".3em .3em"}
                    font_size={"1em"} 
                    onClick={()=>{
                      let path=`/post/tag/${tag}`;
                      navigate(path)}}>{tag}
            </Button>
          )}
        </div>
        <div className='post-list'>
          {sort_json(blogs).map((data,key)=><PostCard key={key} title={data.title} date={data.creat_time} tags={data.tag} file_name={data.file_name} description={data.description}/>)}
        </div>
      </div>}

      {/* tag page */}
      {location.pathname===`/post/tag/${tag}`&&
      <div className='post-container'>
        <div className='tag-menu'>
          <span>Blog tags</span> 
          {(TAG_LIST).map((tag,key)=>
            <Button key={key} 
                    padding={".3em .3em"} 
                    font_size={"1em"}
                    onClick={()=>{
                      let path=`/post/tag/${tag}`;
                      navigate(path)}}>{tag}
            </Button>)}
            <div className='tag_title'><BiPurchaseTagAlt className='tag_icon'/><span>{tag}</span></div>
        </div>
        <div className='post-list'>
          {sort_json(blogs).map((data,key)=> 
            data.tag.includes(tag)&&  //filter based on tag
            <PostCard key={key} title={data.title} date={data.creat_time} tags={data.tag} file_name={data.file_name} description={data.description}/>
            )}
        </div>
      </div>}

      {/* post detail page */}
      {location.pathname===`/post/${blog_id}`&&<PostDetail blog_id={blog_id}/>}
        
      
    </div>
  )
}
