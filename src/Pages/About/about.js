import './about.css'
import Window from '../../Components/Window/window';

export default function About() {

  function aboutContent(){
    return (
      <div className='window-content about-content'>
          <h1>Hello, there</h1>
          <h2>who are you ?</h2>
          <p>
            My name is Isra. 
          </p>
          <p>
            I'm a data scientist and web developer.
            My work and research include machine learning and web development
          </p>

          <h2>what is this website ?</h2>
          <p>
          This is my blog website which I've been designing and developing here and there since 2020. 
          </p>
          <p>This is where I write tech blogs and some random thoughts.  
          </p>
          <p>
          I'm always open for collaboration on machine learning and web development projects.
          Drop me an email at <u>_rane.z.blog@gmail.com_</u>. 
          </p>

        
          
        </div>
    )
  }

  return (
    <div className='about-container'>
      <Window 
        window_name={"about.html"}
        window_content={aboutContent()}
      
      />
    </div>
  )
}
