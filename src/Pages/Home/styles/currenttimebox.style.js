import styled from "styled-components";

export const CurrentTimeBox = styled.div`
& {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
}
& p:nth-child(1){
    font-size: 2em;
    flex: 2;
    padding: auto;
}
& p {
    font-size: 1em;
}
&:hover {
    transform: none;
    box-shadow: 2px 2px 5px grey;
    cursor: initial;
}

`