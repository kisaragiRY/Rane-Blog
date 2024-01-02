import styled from "styled-components"

const SkillBoxWrapper = styled.div`
width: 10em;
text-align: center;
margin: .5em;

// title wrapper
& div:nth-child(1) {
    position: relative;
    height: 2em;
}

// title
& div:nth-child(1) > p {
    display: inline;
    position: absolute;
    font-size: 1.5em;
    left: 1em;
}
// icon
& div:nth-child(1) > span{
    position: absolute;
    font-size: 1em;
    left: 0em;
    bottom: .2em;
}

// tag wrapper
& div:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
}

// tags
& div > button {
    margin: .2em;

    font-size: .8em;
    text-align: center;
    padding: .3em .8em;
    border: solid 1.5px black;
    /* border: none; */
    border-radius: 15px;
    background-color: var(--color-bg);
    /* cursor: none; */
}
`


export function SkillBox(props) {
    return (
        <SkillBoxWrapper>
            <div>
                <span>{props.icon}</span>
                <p>{props.title}</p>
            </div>
            <div>
            {
                props.tags.map((item, iid) => {
                return <button key={iid}>{item}</button>
                })
            }
            </div>

        </SkillBoxWrapper>
    )
}