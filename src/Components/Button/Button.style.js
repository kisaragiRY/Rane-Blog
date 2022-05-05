import styled from "styled-components";

export const Button =styled.button`
  font-size: ${(props)=>props.font_size};;
  box-sizing: border-box;
  border: 1px solid var(--color-text);
  margin: 5px;
  padding: ${(props)=>props.padding};
  color: var(--color-text);
  letter-spacing: 2px;
  &:hover{
  cursor: pointer;
  background-color: var(--color-red);
  color: var(--color-bg);
  transition: 0.1s;
  }
`