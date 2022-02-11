import axios from 'axios';
import React, { useContext, useEffect } from 'react'

const Home =  () => {
  
  useEffect(()=>{
    getPhotoSets();
  });

  const getPhotoSets = async () => {
    let res = await axios.get("/photo_set")
    console.log(res);
  }
  return(
    <div>
      <h1>Home</h1>
     Subset of photos here
    </div>
  )
};

export default Home;