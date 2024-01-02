import { useState } from "react";
import styled from "styled-components";


export const WorkCardWrapper = styled.div`
width: ${props => props.isClicked? '80%':'18em'};
min-height: 20em;
border: solid 3px;
margin: 1em;
padding: 2em;
box-shadow: 8px 8px black;
background-color: var(--color-bg);

display: ${props => props.isClicked? 'grid':'initial'};
grid-template-columns: repeat(auto-fill, 100%);

position: relative;

transition: all .4s ease;

&:hover{
    transform: ${props => props.isClicked? 'scale(1)': 'scale(1.05)'};
    transition: all .4s ease;
    cursor: ${props => props.isClicked? 'initial':'pointer'};
}

// the title
& h1{
    font-size: 1.8em;
    display: block;
    font-weight: bold;
}

// the duration and the intro
& p{
    font-size: 1.2em;
    font-weight: bold;
    /* display: block; */
    margin: 1em 0;
}

// tags
& section:nth-child(1) > div > span {
    display: inline-block;
    font-size: 1em;
    font-weight: 600;
    border: solid 2px black;
    border-radius: 30px;
    margin: .5em 1em 0 0;
    padding: 0.2em .8em;

    background-color: var(--color-red);
    color: white;
}

// links
& section:nth-child(2) > div:nth-child(1) {
    margin: 2em 0;
}
& section:nth-child(2) > div:nth-child(1) > a {
    display: block;
    margin: .5em 0;
    font-weight: bold;
    text-decoration-line: underline;
}

// toggle button
& button {
    /* position: absolute; */
    display: block;
    margin-left: auto;
    margin-right: 0;

    font-size: 1em;
    text-align: center;
    padding: .5em 1em;
    border: solid 2px black;
    border-radius: 20px;
    background-color: var(--color-bg);
    cursor: pointer;
}
& button:hover {
    background-color: var(--color-red);
    color: white;
}
`
export function WorkCard(props){
    const [isClicked, setIsClicked] = useState(false)
    const clickHandler = () => {
        if (!isClicked){
            setIsClicked(!isClicked)
        }
    }
    const toggleHandler = () => {
        if (isClicked){
            setIsClicked(!isClicked)
        }
    }
    return (
        <WorkCardWrapper onClick={clickHandler} isClicked={isClicked}>
            <section>
                <h1>{props.name}</h1>
                <p>{props.duration}</p>
                <div>
                    {props.tags? props.tags.map((key, iid) => {
                        return (
                            <span key={iid}>{key}</span>
                        )
                    })
                    : ""
                    }
                </div>
            </section>
            <section>

                {
                    isClicked? 
                    <>
                        <div>
                            {props.githubLink?
                                <a href={props.githubLink} target="_blank">Github Source Code</a>
                                : ""
                            }
                            {props.websiteLink?
                                <a href={props.websiteLink} target="_blank">Link To Live Website</a>
                                : ""
                            }
                        </div>
                            {props.projectIntro}
                        <div>
                            <button onClick={toggleHandler}>toggle</button> 
                        </div>
                    </>
                    : ""
                }
            </section>

        </WorkCardWrapper>
    )

}