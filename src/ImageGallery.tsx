import React from "react";
import { Container, Header } from "./App.styles";
import { HomeLink } from "./components/HomeLink";
import styled from "styled-components";
import * as Photos from "./services/photos"
import { Photo } from "./services/photos";

const Loading = styled.div`
  text-align: center;

`;

export function ImageGallery(){
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState<Photo[]>([])
  React.useEffect(()=>{
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos()
  }, [])

  return(
    <Container>
      <Header>
        <HomeLink />
        <h1>Image Gallery</h1>
      </Header>
      {/* Area de upload */}
      {/* lista de fotos */}
      {loading && <Loading>Carregando...</Loading>}
      {!loading && photos.length <= 0 && 
      <div>You don`t have any photo registered</div>
      }
      {!loading && photos.length > 0 && 
      <div>{photos.map((item) => {
            <div>{item.name}</div>
          })}</div>
      }
    </Container>
  )
}