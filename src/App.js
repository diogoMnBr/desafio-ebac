import React, { useEffect, useState } from "react";
import './App.css';
import Videos from './pages/Videos.js';
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function App(/* {likes, messages, shares} */) {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight;
  }

  const [video, setVideos] = useState([])
  //pegando as informações do banco de dados criado no firebase
  async function getVideos() {
    const videosCollection = collection(db, "videos") //acessa a coleção do banco de dados
    const videosSnapshot = await getDocs(videosCollection) // pega a lista de vídeos
    const videosList = videosSnapshot.docs.map(doc => doc.data()) //informacoes de cada documento
    setVideos(videosList)

  }
  //chamada da funcao getVideos
  useEffect (() => {
    getVideos();
  }, [])


  return (
    <div className="App" style={{ maxHeight: maxHeight + "px"}}>
      

      <div className="app-videos">
        
        { video.map((item)=>{
          return ( //renderizacao dinamica do banco de dados
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
