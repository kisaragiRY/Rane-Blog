import React from 'react'
import '../TableOfContents/tableOfContents.css'
import { useState,useEffect,useRef } from 'react'


export default function TableOfContents() {
  const [headings, setHeadings]= useState([]);
  useEffect(()=>{
    const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
    .map((item)=>({
      id: item.id,
      text:item.innerText,
      level: Number(item.nodeName.charAt(1))
    }))
    setHeadings(elements)
  },[])

  const getClassName = (level) => {
    switch (level) {
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
useEffect(() => {
  const handleObsever = (entries) => {
    entries.forEach((entry) => {
      if (entry?.isIntersecting) {
        setActiveId(entry.target.id)
      }
    })
  }

  observer.current = new IntersectionObserver(handleObsever, {
    rootMargin: "-20% 0% -35% 0px"}
  )

  const elements = document.querySelectorAll("h2, h3", "h4")
  elements.forEach((elem) => observer.current.observe(elem))
  return () => observer.current?.disconnect()
}, [])

  return (
    <nav className='toc'>
      {console.log(document.querySelectorAll("h2, h3, h4"))}
      <p>目录</p>
      <ul>
        {headings.map(heading=>(
            <li key={heading.id} className={getClassName(heading.level)}>
                <a href={`#${heading.id}`}
                    onClick={(e)=>{
                      e.preventDefault()
                      document.querySelector(`#${heading.id}`).scrollIntoView({behavior:"smooth"})
                      }}
                    // style={{
                    //   fontWeight: activeId === heading.id ? "bold" : "normal" 
                    // }}
                    className={activeId === heading.id ? "toc-a active" :"toc-a"}>
                  {heading.text}</a>
            </li>
          ))
        } 
      </ul>
    </nav> 
  )  
} 