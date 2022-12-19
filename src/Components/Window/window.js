import React, { useEffect, useRef } from 'react';
import './window.css';

export default function Window(props){
    const window_style = {
        width: props.window_width,
        top: props.window_start_top,
        left: props.window_start_left
    }
    return(
        <div className='window-wrapper' style={window_style}>
            <div className='window-header' >
                <span>
                    <img src='https://res.cloudinary.com/kisaragiry/image/upload/v1671362504/raneblog.com/circle_ktldki.svg' />
                    <img src='https://res.cloudinary.com/kisaragiry/image/upload/v1671362504/raneblog.com/circle_ktldki.svg' />
                </span>
                <span>{props.window_name}</span>
            </div>
            <div className='window-content'>
                {props.window_content}
            </div>

        </div>
    )
}