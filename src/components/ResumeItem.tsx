import styled from "styled-components"

type Props = {
  title: string;
  value: number;
}

export const ResumeItemContainer = styled.div`
  align-items: center;
  margin: 0 10px;
  h2{
    font-size: 12px;
    margin-bottom: 8px;
    color: #8b8b8b;
  }
  p{
    font-size: 18px;
    font-weight: 600;
  }
`;

export function ResumeItem({title, value}: Props ){
  return(
    <ResumeItemContainer>
      <h2>{title}</h2>
      <p style={ value < 0 ? {color: "red"} : {color: "green"} } >R$ {value}</p>
    </ResumeItemContainer>
  )
}