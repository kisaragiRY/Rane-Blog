import styled from "styled-components";

export const TagButton = styled.button`
  font-size: ${(props) => props.font_size ? props.font_size : "initial"};
  box-sizing: border-box;
  border: ${(props) => props.border_thickness} solid var(--color-text);
  border-radius: 1em;
  margin: ${(props) => props.margin ? ".8em" : ".3em"};
  padding: ${(props) => props.padding ? props.padding: "none"};
  /* color: var(--color-text); */
  letter-spacing: .05em;
  font-weight: bold;
  background-color: var(--color-bg);
  &:hover{
    cursor: pointer;
    background-color: var(--color-red);
    transition: 0.1s;
    color: white;
  }
`