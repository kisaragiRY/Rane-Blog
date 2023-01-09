import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import './home.css'
import blogs from '../../Blogs/blogs.json'
import { sort_json } from '../../Helpers/utils'
import { Link } from 'react-router-dom'
import Window from '../../Components/Window/window'
import { Button } from '../../Components/Button/Button.style'

export default function Home() {
  const [clickCount, setClickCount] = useState(1)
  let navigate=useNavigate();

  const recent_ariticle_content = (
    <div className='recent-article'>
      <h2>Recent Articles</h2>
      <div className='list-container'>
        {sort_json(blogs).slice(0,4).map((article,key)=>
        <div key={key} className='article-card'>
          <div>0{key+1}</div>
          <div>
            <Link to={{pathname:`/post/${btoa(article.file_name)}`}}>
              {article.title}
            </Link>
            </div>
        </div>)}
      </div>
    </div>
  )

  const about_me_content = (
    <div className='home-about'>
      <div className='bio'>
        <Link to='/about' >
          <img src='https://res.cloudinary.com/kisaragiry/image/upload/v1671538294/raneblog.com/lady_prof_j6vrwu.svg'/>
        </Link>
        <div>
          <span>Rane</span>
          <div>
            <img className='icon' src='https://res.cloudinary.com/kisaragiry/image/upload/v1671539306/raneblog.com/User_box_arxj5j.svg'/>
            <span>Data Scientist</span>
          </div>
          <div>
            <img className='icon' src='https://res.cloudinary.com/kisaragiry/image/upload/v1671539308/raneblog.com/Message_qfwadj.svg'/>
            <span>rane.z.blog@gmail.com</span>
          </div>
          <div>
            <img className='icon' src='https://res.cloudinary.com/kisaragiry/image/upload/v1671539304/raneblog.com/Pin_a4quqe.svg'/>
            <span>Kyoto, Japan</span>
          </div>
        </div>
      </div> 
    </div>
  )

  const service_content = (
    <div className='home-service'>
      <h1>Find Solutions</h1>
      <span>Boost your business with AI. Get insights through data analysis.</span>
      <Button 
        font_size="1.2rem" 
        padding=".5rem"
        border_thickness="3px"
        onClick={()=>{
          let path=`/service`
          navigate(path)
          window.scrollTo(0, 0)
        }}
        >
          Learn More
      </Button>
    </div>
  )

  return (
    <div className='home-wrapper'>
        <div className='home-intro'>
            <span>Rane's Blog</span>
            <span>Rane's Blog</span>
            <span>Rane's Blog</span>
            <span>Rane's Blog</span>
            <div className='quick-links-wrapper'>
              <Link to='/post' >Post</Link>
              {/* <li><Link to='/service' >Service</Link></li> */}
              <Link to='/about' >About</Link>
            </div>
        </div>
        <div className='interface' onClick={()=>{setClickCount(clickCount+1)}}>

          <Window 
            window_width = '30rem'
            window_name = 'about_me.html'
            window_content = {about_me_content}
            window_start_top = '10vw'
            window_start_left = '10vw'
            total_count = {clickCount}
            />

          <Window 
            window_width = '25rem'
            window_name = 'recent_article.html'
            window_content = {recent_ariticle_content}
            window_start_top = '3vw'
            window_start_left = '50vw'
            total_count = {clickCount}
            />

          {/* <Window 
            window_width = '25rem'
            window_name = 'service.html'
            window_content = {service_content}
            window_start_top = '3vw'
            window_start_left = '10vw'
            total_count = {clickCount}
            /> */}
        
        </div>
    </div>
  )
}
