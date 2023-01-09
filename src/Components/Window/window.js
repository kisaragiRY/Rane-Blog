import React, {useState, useRef, useEffect} from 'react';
import Draggable from "react-draggable";
import './window.css';

export default function Window(props){
    const [clickCount, setClickCount] = useState(1)
    const dot_ref = useRef(null);

    var window_style = {
        width: props.window_width,
        top: props.window_start_top,
        left: props.window_start_left,
        zIndex: clickCount,
    }

    const window_click_handler = () => {
        if(props.total_count){
            setClickCount(props.total_count+1)
        }
    }

    const dot1_click_handler = () =>{
        if(props.window_display){
            props.window_display("none")
        }
    }
    useEffect(()=>{
        if(!props.window_display){
            dot_ref.current.style.display = "none"
        }
        
    })

    
    return(
        <Draggable onDrag={window_click_handler} disabled={props.drag}>
        <div  className='window-wrapper' style = {window_style}>
            <div className='window-header' >
                <div className='header-button'>
                    <span ref = {dot_ref} className='dot' onClick={dot1_click_handler}></span>
                    {/* <span className='dot'></span> */}
                </div>
                <span>{props.window_name}</span>
            </div>
            <div className='window-content'>
                {props.window_content}
            </div>
        </div>
        </Draggable>

    )
}