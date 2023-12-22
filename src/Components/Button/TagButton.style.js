import styled from "styled-components";

export const TagButton = styled.button`
  font-size: ${(props) => props.font_size ? props.font_size : "initial"};
  box-sizing: border-box;
  border: ${(props) => props.border_thickness} solid var(--color-text);
  border-radius: 1em;
  margin: ${(props) => props.margin ? props.margin : ".3em"};
  padding: ${(props) => props.padding ? props.padding : "none"};
  /* color: var(--color-text); */
  letter-spacing: .05em;
  font-weight: bold;
  background-color: ${(props) => (props.bgColor==="red") ? "var(--color-red)" : "var(--color-bg)"};
  color: ${(props) => (props.bgColor==="red") ? "white" : "var(--color-text)"};

  &:hover{
    cursor: pointer;
    background-color: ${(props) => (props.bgColor=="red") ? "var(--color-bg)" : "var(--color-red)"};
    transition: 0.1s;
    color: ${(props) => (props.bgColor==="red") ? "var(--color-text)" : "white"};
  }
`