import React, {useState, useRef, useEffect} from 'react';
import './window.css';

export default function Window(props){
    
    return(
        <div  className='window-wrapper'>
            <div className='window-header' >
                <div className='header-button'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
                <span>{props.window_name}</span>
            </div>
            <div className='window-content'>
                {props.window_content}
            </div>
        </div>

    )
}