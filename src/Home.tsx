import { Container, Header } from "./App.styles";
import styled from "styled-components";

const Content = styled.section`
  margin: 15px;
  li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    background-color: #0CA4A5;
    height: 80px;
    padding: 24px;
    border-radius: 4px;
    color: #FFF;
    margin-bottom: 20px;
    .button{
      a{
        background: #06908F;
        padding: 20px 40px;
        color: #FFF;
        text-decoration: none;
        font-size: 18px;
        transition: .3s;
        border-radius: 4px;
        &:hover{
          background-color: #057676;
        }
      }
    }
  }
`;

const Projects = [
  {
    name: 'Dia 1 - ToDo List',
    link: '/todo-list'
  }
]

export function Home(){
  return(
    <Container>
      <Header>
        <h1>React week challenge</h1>
      </Header>
      <Content>

        <ul>
          {Projects.map(project => {
            return <Link name={project.name} href={project.link} />
          })}
        </ul>

      </Content>
    </Container>
  )
}

type Props = {
  name: string;
  href: string;
}

function Link({name, href}: Props){
  return(
    <li>
      <h2>{name}</h2>
      <div className="button">
        <a href={href}>Ver</a>
      </div>
    </li>
  )
}