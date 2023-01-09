import React,{useEffect, useState,useRef} from 'react'
import emailjs from '@emailjs/browser';
import './about.css'

export default function About() {
  const file_name="about.md"
  const [post,setPost]=useState('')
  const [Msent,setMsent]=useState(false)

  useEffect(()=>{
    import(`../../Blogs/${file_name}`)
      .then(res=>{
        fetch(res.default)
          .then(res=>res.text())
          .then(res=>setPost(res))
      })
      .catch(err=>console.log(err));
  })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevent page from refresh
    emailjs.sendForm('service_3ifgjxj', 'template_9sm5hzj', form.current, 'KamkxUwTBQUOcVbRg')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    setMsent(!Msent);
    console.log(Msent);
    e.target.reset();
  };

  return (
    <div className='about-container'>
      <div className='about-window'>
        <div className='window-header'>
          <div className='header-button'>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
          <span>about.html</span>
        </div>
        <div className='window-content about-content'>
          <h1>Hello, there</h1>
          <h2>who are you ?</h2>
          <p>
            My name is Kisaragi. 
            You can also call me Rane if that’s easier for you.
          </p>
          <p>
            I’m a data scientist, 
            specialized in statistical learning and machine learning. 
            My research and job involve neuroscience and computer vision.
          </p>

          <h2>what is this website ?</h2>
          <p>
          This is my personal website where I write tech blogs and 
          offer services that include data analysis and web design/development. 
          </p>
          <p>
          If you have anything else that you think I can help you with. 
          Drop me an email at <u>_rane.z.blog@gmail.com_</u>. 
          </p>

          <h2>what are you busy with recently ?</h2>
          <p>
            My priority right now is the research I've been working on for the past two years.
            To put it simply, it's about the application of machine learning and 
            statistical learning in neuroscience &#129504;. The project related
            code is uploaded <a 
                href='https://github.com/kisaragiRY/decoding-DG' 
                target="_blank" 
                rel="noreferrer">
                   <u>_here_</u>
              </a>.

          </p>
          <p>
          On the side, I'm also working on developing this <a 
            href='https://github.com/kisaragiRY/Rane-Blog' 
            target="_blank" 
            rel="noreferrer">
                <u>_website_</u>
          </a>
          , 
          learning Arabic and posting "study with me" video to <a 
                href='https://www.youtube.com/channel/UCxyic1BkqjQHIb1nuxpAOeg' 
                target="_blank" 
                rel="noreferrer">
                   <u>_YouTube_</u></a>.
          </p>
          
        </div>

            
      
      </div>
    </div>
  )
}
