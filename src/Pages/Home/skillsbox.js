import styled from "styled-components";
import { 
    BsYoutube, BsInstagram, BsGithub,
    BsBarChartLine, BsFileEarmark, BsCodeSlash, BsTools
  
  } from "react-icons/bs";
import { useState } from "react"

import { SkillBox } from '../../Components';

const SkillsBoxWrapper = styled.div`
display: ${props => props.isClicked? "flex": "default"};
flex-wrap: wrap;
justify-content: space-around;

transition: all .4s ease;

padding: 2em;

&:hover{
  transition: all .4s ease;
  transform: scale(1.02);
  cursor: pointer;

  box-shadow: 5px 5px 5px grey;
}

p {
  /* font-weight: ${props => props.isClicked? "normal": "bold"}; */
  color: ${props => props.isClicked? "black": "grey"};
  font-style: italic;
  margin: auto;
}
h1 {
  margin:  .4em 0;
  font-size: 1.4em;
}

`
export function SkillsBox() {
    const [isClicked, setIsClicked] = useState(false)

    const HandleExpand = () => {
        setIsClicked(!isClicked)
    }
    return(
        <SkillsBoxWrapper className='homebox-wrapper'  onClick={HandleExpand} isClicked={isClicked}>
          {
            isClicked? 
            <>
              <SkillBox 
                icon={<BsBarChartLine/>}
                title='data science'
                tags={["ml", "analytics", "visualization", "python", "scraping"]}
              />
              <SkillBox 
                icon={<BsFileEarmark/>}
                title='frontend'
                tags={["react", "javascript", "html", "css"]}
              />
              <SkillBox 
                icon={<BsCodeSlash/>}
                title='backend'
                tags={["mysql", "graphql", "node.js", "express", "sequelize"]}
              />
              <SkillBox 
                icon={<BsTools/>}
                title='tools'
                tags={["git", "docker", "aws", "figma", "serverless"]}
              />
            </>
            :
            <>
              <h1>Hi, there</h1>
              <p>I'm a full stack developer and data scientist based in Tokyo.</p>
            </>
          }
        </SkillsBoxWrapper>
    )
}