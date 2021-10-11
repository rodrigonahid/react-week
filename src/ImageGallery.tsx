import React from "react";
import { Container, Header } from "./App.styles";
import { HomeLink } from "./components/HomeLink";
import styled from "styled-components";
import * as Photos from "./services/photos"
import { Photo } from "./services/photos";
import { PhotoItem } from "./components/PhotoItem";

const Loading = styled.div`
  text-align: center;
  
`;

const UploadImage = styled.form`
  background-color: #3D3F43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;
  color: #CCC;
  input[type=submit] {
    background-color: #756DF4;
    border: 0;
    color: #FFF;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;
    &:hover{
      opacity: .9;
    }
  }
`;

export function ImageGallery(){
  const [uploading, setUploading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState<Photo[]>([]);
  React.useEffect(()=>{
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos()
  }, [])

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;
    if(file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if(result instanceof Error) {
        alert(result.name)
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList)
      }
    }
  }

  return(
    <Container>
      <Header>
        <HomeLink />
        <h1>Image Gallery</h1>
      </Header>
      {/* Area de upload */}
      <UploadImage method="POST" onSubmit={handleFormSubmit}>
        <input type="file" name="image" />
        <input type="submit" value="Send" />
        {uploading && 'Enviando...'}
      </UploadImage>

      {/* lista de fotos */}
      {loading && <Loading>Carregando...</Loading>}
      {!loading && photos.length <= 0 && 
      <div>You don`t have any photo registered</div>
      }
      {uploading && <div>Carregando..</div>}
      {!loading && photos.length > 0 && 
      <div>{photos.map((item, index) => {
            return <PhotoItem key={index} url={item.url} name={item.name} />
          })}</div>
      }
    </Container>
  )
}