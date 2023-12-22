import React from 'react'
import './post.css'
import blogs from '../../Blogs/blogs.json'
import PostCard from '../../Components/postCard/PostCard'
import { TagButton } from '../../Components/Button/TagButton.style'
import { useNavigate,useLocation,useParams} from 'react-router-dom'
import {BiPurchaseTagAlt} from "react-icons/bi"
import { sort_json} from '../../Helpers/utils'
import PostDetail from '../PostDetail/PostDetail'
import {TAG_LIST} from '../../Helpers/const'

export default function Post() {
  let location = useLocation();
  let navigate = useNavigate();
  let {tag} = useParams(); //parameters from url

  return (
    <div>
      <div className='post-container'>
        <div className='post-wrapper'>
          <div className='tag-menu'>
            <span>Blog tags</span> 
            {
              (TAG_LIST).map((tag,key)=>
                <TagButton key={key} 
                        margin=".8em"
                        padding={".3em .3em"}
                        font_size={"1em"} 
                        onClick={()=>{
                          let path=`/post/tag/${tag}`;
                          navigate(path)}}>{tag}
                </TagButton>
              )
            }
            {
              (location.pathname===`/post/tag/${tag}`) ?
                  <div className='tag_title'><BiPurchaseTagAlt className='tag_icon'/><span>{tag}</span></div>
                : ""
            }
          </div>
          <div className='post-list'>
            {sort_json(blogs).map((data,key)=>
              <PostCard 
                key={key} 
                title={data.title} 
                date={data.creat_time} 
                tags={data.tag} 
                file_name={data.file_name} 
                description={data.description}/>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
