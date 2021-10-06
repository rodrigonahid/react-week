import React from "react";
import styled from "styled-components";
import { Item } from "../types/Item";

type ContainerProps = {
  done: boolean;
}

const List = styled.li(({ done }: ContainerProps)=>(
  `
  display: flex;
  align-items: center;
  padding: 24px;
  border-radius: 4px;
  margin: 24px 0;
  background-color: #D3D4D9;
  box-shadow:  0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  list-style: none;
  input{
    margin-right: 24px;
    height: 32px;
    width: 32px;
  }
  p{
    color: #4B88A2;
    font-size: 28px;
    text-decoration: ${done ? 'line-through' : 'initial'}
  }
`
));

type Props = {
  item: Item
}

export function ListItem({item}: Props){
  const [isChecked, setIsChecked] = React.useState(item.done)

  return(
    <List done={isChecked}>
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
       />
      <p>{item.name}</p>
    </List>
  )
}