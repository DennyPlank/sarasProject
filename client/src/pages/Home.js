import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

const Home =  () => {
  const [photoSetState, setPhotoSetState] = useState([]);
  
  useEffect(()=>{
    getPhotoSets();
  },[]);

  const getPhotoSets = async () => {
    let res = await axios.get("/photo_set")
    setPhotoSetState(res.data);
  }
  
  const renderPhotos = () => {
    console.log("render photos hit")
    return photoSetState.map((p)=>{
      console.log(p)
       return (
         <div id={p.id}>
          <Card id="homeCards">
            <Card.Img src={"https://res.cloudinary.com/doqs3jkhw/image/upload/v1643862183/IMG_5943_s9kc9f.jpg"} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title> {p.name} </Card.Title>
                <Card.Text> {p.location} </Card.Text>
            </Card.ImgOverlay>
          </Card>
         </div>
      )
    })
  }

  return(
    <div>
      <h1>Home</h1>
        {renderPhotos()}
    </div>
  )
};

export default Home;