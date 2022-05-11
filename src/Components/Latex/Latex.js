import React from 'react'
import "react-latex"
import './latex.css'

export default function Latex(props) {
    var Latex=require('react-latex');
  return (
      <Latex displayMode={props.block} >{props.values}</Latex>
    
  )
}
