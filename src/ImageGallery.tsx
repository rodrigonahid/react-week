import { Container, Header } from "./App.styles";
import { HomeLink } from "./components/HomeLink";

export function ImageGallery(){
  return(
    <Container>
      <Header>
        <HomeLink />
        <h1>Image Gallery</h1>
      </Header>
    </Container>
  )
}