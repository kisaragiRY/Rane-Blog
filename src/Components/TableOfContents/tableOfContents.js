import React from 'react'
import '../TableOfContents/tableOfContents.css'
import { useState,useEffect,useRef } from 'react'


export default function TableOfContents(props) {

  const getClassName = (level) => {
    switch (level) {
      case 1:
        return 'head1'
      case 2:
        return 'head2'
      case 3:
        return 'head3'
      case 4:
        return 'head4'
      default:
        return null
    } 
  } 

const observer = useRef()
const [activeId, setActiveId] = useState('')
// const [elements, setElements] = useState([])
const [headings, setHeadings] = useState([])

const elements = document.querySelectorAll("h1,h2") //props.elements

useEffect(() => {
  // setElements(document.querySelectorAll("h1,h2"))
  // console.log(elements) 
  // const handleObsever = (entries) => {
  //   entries.forEach((entry) => {
  //     if (entry?.isIntersecting) {
  //       setActiveId(entry.target.id)
  //     }
  //   })
  // }
  // observer.current = new IntersectionObserver(handleObsever, {
  //   rootMargin: "-30% 0% -35% 0px"}
  // )

  // elements.forEach((elem) => observer.current.observe(elem))
  // return () => {
  //   observer.current?.disconnect();
  // }
  const elements = Array.from(document.querySelectorAll("h1, h2"))
      .map((element) => element.innerText);
    setHeadings(elements);
}, [])
 
  return (
    
    <nav className='toc'>
      <p>目录</p>
      <ul>
        {/* {console.log(headings)} */}
        {/* {headings.map(heading=>(
            <li key={heading.id} className={getClassName(heading.level)}>
                <a href={`#${heading.id}`}
                    onClick={(e)=>{
                      e.preventDefault()
                      setActiveId(heading.id)
                      document.querySelector(`#${heading.id}`).scrollIntoView({behavior:"smooth"})
                      
                      }}
                    // style={{
                    //   fontWeight: activeId === heading.id ? "bold" : "normal" 
                    // }}
                    className={activeId === heading.id ? "toc-a active" :"toc-a"}>
                  {heading.text}</a>
            </li>
          ))
        }  */}
      </ul>
    </nav> 
  )  
} 
