import React, { useEffect, useState } from "react";
import './App.css';
import Videos from './pages/Videos.js';
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function App(/* {likes, messages, shares} */) {

  const [video, setVideos] = useState([])
  //pegando as informações do banco de dados criado no firebase
  async function getVideos() {
    const videosCollection = collection(db, "videos")
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList)

  }

  useEffect (() => {
    getVideos();
  }, [])


  return (
    <div className="App">
      <div className="app-videos">
        
        { video.map((item)=>{
          return (
            <Videos 
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        }) }

        {/* <Videos 
          likes={456}
          messages={689}
          shares={890}
          name="Diogo"
          description="Gato olhando pro dedo"
          music="musica boa demais"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        /> */}
      </div>
    </div>
  );
}

export default App;
