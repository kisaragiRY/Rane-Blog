import React, {useState, useEffect, useRef} from 'react'
import './service.css'
import { Button } from '../../Components/Button/Button.style'
import Window from '../../Components/Window/window'

export default function Service() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [jouneyWindowDisplay, setjouneyWindowDisplay] = useState("none")
    const [contactWindowDisplay, setcontactWindowDisplay] = useState("none")
    const jouney_window_ref = useRef(null);
    const contact_window_ref = useRef(null);

    const button_handler1 = ()=>{
        setjouneyWindowDisplay("block")
    }
    const button_handler2 = ()=>{
        setcontactWindowDisplay("block")
    }
    useEffect(()=>{
        jouney_window_ref.current.style.display = jouneyWindowDisplay
        contact_window_ref.current.style.display = contactWindowDisplay
    })

    const subtitles = [
        "Let's get started by defining the problem.",
        "Collect and prepare the data.",
        "Analyze and visualize the data.",
        "Deliver the results."
    ]
    const img_url = [
        'https://res.cloudinary.com/kisaragiry/image/upload/v1671847246/raneblog.com/step-1.jpg',
        'https://res.cloudinary.com/kisaragiry/image/upload/v1671849545/raneblog.com/step-2.jpg',
        'https://res.cloudinary.com/kisaragiry/image/upload/v1671849604/raneblog.com/step-3.jpg',
        'https://res.cloudinary.com/kisaragiry/image/upload/v1671600054/raneblog.com/step-4.jpg'
    ]
    const results = [
        (<div>
            <span>(1) Current needs and goals.</span>
            <span>(2) The relevant data to solving the problem.</span>
        </div>),
        (<div>
            <span>(1) Collecting data from various sources (e.g. websites).</span>
            <span>(2) Prepare the data in a usable format.</span>
        </div>),
        (<div>
            <span>(1) Utilize AI algorithms to find patterns and trend in the data.</span>
            <span>(2) Visualize the data for further discussion.</span>
        </div>),
        (<div>
            <span>(1) An analysis report with insights.</span>
            <span>(2) Further decision making and actions.</span>
        </div>)
        
    ]

    const journey_content = (
        <div className='journey_content'>
            <div className='time-line'>
                {subtitles.map((_, dotIndex) => (
                    <span key={dotIndex} className={currentIndex == dotIndex ? 'dot journey-dot dot-active':'dot journey-dot'} onClick={()=>(setCurrentIndex(dotIndex))}></span>
                ))}
            </div>
            <div>
                <div className='step-detail'>
                    <h2>Step {currentIndex+1}</h2>
                    <p>{subtitles[currentIndex]}</p>
                    <img src={img_url[currentIndex]}/>
                    {results[currentIndex]}
                </div>
            </div>

        </div>
    )
    const contact_content = (
        <div className='contact_content'>
            <h2>Drop an email at: </h2>
            <span>rane.z.blog@gmail.com</span>
        </div>
    )
  return (
    <div className='service-wrapper'>
        <div className='service-intro'>
            <h1>why do businesses <br/>need<br/> data analysis</h1>
        </div>
            <div className='detail-wrapper format-1'>
                <img src='https://res.cloudinary.com/kisaragiry/image/upload/v1671711206/raneblog.com/Group_lmwnnq.svg'/>
                <img src='https://res.cloudinary.com/kisaragiry/image/upload/v1671711206/raneblog.com/Bag_alt_e2cm5v.svg'/>
                <img src='https://res.cloudinary.com/kisaragiry/image/upload/v1671711207/raneblog.com/check_ring_round_wopunl.svg'/>

                <span className='sub-title'>Customer</span>
                <span className='sub-title'>sales</span>
                <span className='sub-title'>decision</span>

                <span className='intro-detail'>Understand <b>customer</b> behavior and preferences. Improve customer <b>satisfaction</b> more effectively.</span>
                <span className='intro-detail'>Identify <b>factors</b> that would lead to popular and under performing<b> products</b>.</span>
                <span className='intro-detail'>Make <b>informed decisions</b> based on data rather than pure assumptions or guesses.</span>
            </div>
            <div className='detail-wrapper format-2'>
        
                <img src='https://res.cloudinary.com/kisaragiry/image/upload/v1671711206/raneblog.com/Group_lmwnnq.svg'/>
                <span className='sub-title'>Customer</span>
                <span className='intro-detail'>Understand <b>customer</b> behavior and preferences. Improve customer <b>satisfaction</b> more effectively.</span>
                
        
                <img src='https://res.cloudinary.com/kisaragiry/image/upload/v1671711206/raneblog.com/Bag_alt_e2cm5v.svg'/>
                <span className='sub-title'>sales</span>
                <span className='intro-detail'>Identify <b>factors</b> that would lead to popular and under performing<b> products</b>.</span>
                
        
                <img src='https://res.cloudinary.com/kisaragiry/image/upload/v1671711207/raneblog.com/check_ring_round_wopunl.svg'/>
                <span className='sub-title'>decision</span>
                <span className='intro-detail'>Make <b>informed decisions</b> based on data rather than pure assumptions or guesses.</span>
            </div>

        <div className='interface service-interface'> 

            <div className='about-window service-window'>
                <div className='window-header service-header'>
                    <div className='header-button'>
                        <span className='dot'></span>
                        <span className='dot'></span>
                    </div>
                    <span>service.html</span>
                </div>
                <div className='service-content'>
                    <h2>Find Solutions</h2>
                    <p>
                    To help you understand your business better by looking 
                    deeper into the data so that you can make more informed 
                    decisions and achieve your business objectives
                    </p>
                    <div className='button-wrapper'>
                        <Button
                            font_size="1rem" 
                            padding=".5rem"
                            border_thickness="3px"
                            onClick={button_handler1}
                        >Start My Journey</Button>
                        <Button
                            font_size="1rem" 
                            padding=".5rem"
                            border_thickness="3px"
                            onClick={button_handler2}
                        >Get In Touch</Button>
                    </div>                    
                </div>
            </div>
            <div ref = {jouney_window_ref} className='journey_window'>            
                <Window
                    window_width = "26rem"
                    window_name = "my_journey.html"
                    window_start_top = '2rem'
                    window_start_left = '5%'
                    window_content = {journey_content}
                    window_display = {dot_click_display => setjouneyWindowDisplay(dot_click_display)}
                />
            </div>

            <div ref = {contact_window_ref} className='contact_window'>            
                <Window
                    window_name = "contact.html"
                    window_start_top = '15rem'
                    window_start_left = '70%'
                    window_content = {contact_content}
                    window_display = {dot_click_display => setcontactWindowDisplay(dot_click_display)}
                />
            </div>

        </div>
    </div>
  )
}
