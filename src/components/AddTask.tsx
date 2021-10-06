import React from "react";
import styled from "styled-components";

const AddTaskWrapper = styled.div`
  display: flex;
  background: #0CA4A5;
  padding: 24px;
  border-radius: 8px;
  color: white;
  .image{
    text-align: center;
    padding: 8px;
    font-size: 32px;
    width: 54px;
    height: 54px;
    background-color: #06908F;
    margin-right: 24px;
    border-radius: 4px;
    cursor: pointer;
    transition: .3s;
    &:hover{
      background: #057676;
    }
  }
  .input{
    display: flex;
    align-items: center;
    input{
      padding: 4px 16px;
      font-size: 24px;
      background-color: transparent;
      border: 2px solid #06908F;
      border-radius: 4px;
      color: #FFF;
    }
  }
`;

type Props = {
  onEnter: (taskName: string) => void
}

export function AddTask({onEnter}: Props){
  const [inputText, setInputText] = React.useState('');

  function handleKeyUp(item: React.KeyboardEvent){
    if(item.code === 'Enter' && inputText !== ''){
      onEnter(inputText)
      setInputText('')
    }
  }
  function handleClick(item: React.MouseEvent){
    if(inputText !== ''){
      onEnter(inputText)
      setInputText('')
    }
  }

  return(
    <AddTaskWrapper>
      <div className="image" onClick={handleClick}>+</div>
      <div className="input">
        <input
          type="text"
          value={inputText}
          onChange={e => {
            setInputText(e.target.value);
          }} 
          onKeyUp={handleKeyUp}
        />
      </div>
    </AddTaskWrapper>
  )
}