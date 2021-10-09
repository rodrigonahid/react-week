import styled from "styled-components"

const HomeLinkWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  a {

    &::before{
      content: '<'
    }
  }
`;

export function HomeLink(){
  return(
    <HomeLinkWrapper>
      <a href="/"> Voltar </a>
    </HomeLinkWrapper>
  )
}