import styled from "styled-components";

export const ProfileImgBox = styled.div`
&{
    background-image: url(${require(`../../../Assets/profile.png`)});
    background-position: center 40%;
    background-size: 200% auto;
}
& p{
    font-size: 1.5em;
    letter-spacing: 5px;
}
:hover{
    transition: all .4s ease;
    transform: scale(1.02);
    cursor: pointer;

    box-shadow: 5px 5px 5px grey;
}
`

