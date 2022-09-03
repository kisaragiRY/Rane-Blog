import React,{useEffect, useState,useRef} from 'react'
import Markdown from '../../Components/Markdown/Markdown'
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
      <div className='about-title'>
        <span>About Me</span>
      </div>
      <div className='about-me'>
        {/* <div className='about-markdown'>
          <Markdown content={post} />
        </div> */}
        <div className='que-ans'>
          <div className='que'>Who are you?</div>
          <div className='ans'>
              <p>My name is <mark>Rane</mark>, currently a DS master student 
                focusing on all kinds of <mark>machine learning algorithms</mark> and
                of course <mark>statistical learning</mark>.
              </p>
          </div>

          <div className='que'>What is this website about?</div>
          <div className='ans'>
              <p>
                This website is my personal blog where I write about about <mark>Math, 
                Statistics, Machine Learning and other random stuff</mark>.
          
              </p>
          </div>

          <div className='que'>What are you busy with recently?</div>
          <div className='ans'>
              <p>
                I'm in the last year of my master program, so school stuff is 
                my priority. 
              </p>
              <p>On the side, I write blogs, furnishing my website and learning French 🇫🇷.

              </p>
          </div>

          <div className='que'>What do you do for fun &#x1F60B;?</div>
          <div className='ans'>
              <p>
                I design houses using an app called shaper3D (no ads here) and sometimes
                do pixel art (<mark><a href='https://www.instagram.com/kisaragi.z/'>link to my instagram</a></mark>).
              </p>
          </div>

          <div className='que'>How do I contact you?</div>
          <div className='ans'>
              <p>
                If you have questions about the blogs, and want to have discussion further, 
                you can write emails to <mark>rane.z.blog@gmail.com</mark>.
              </p>
          </div>
          
        </div>

        {/* <div className='contact-form'>
          <div className="contact-header"> contact me</div>

            <form className="contact-body" ref={form} onSubmit={sendEmail}>
              <input name="name" type="text" className="contact-body__name" required placeholder="Name"/>
              <input name="email" type="email" className="contact-body__email" placeholder="Email" />
              <select name='Continent' className="contact-body__continent">
                <option value="">--Please choose a place where you are from--</option>
                <option>Africa</option>
                <option>Antarctica</option>
                <option>Asia</option>
                <option>Australia</option>
                <option>Europe</option>
                <option>North America</option>
                <option>South America</option>
              </select>
              <textarea name='message' type="text" className="contact-body__message" placeholder="Message" required></textarea>
              <button value="Send" className="contact-body__submit" type="submit">SEND</button>
              <span className={Msent?'sent-message active':'sent-message'}>Thank you, message sent!</span>

            </form>
          </div> */}
      </div>

    </div>
  )
}
