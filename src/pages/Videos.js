import React, { useRef, useState } from 'react';
import './video.css';
import VideoFooter from "./components/footer/VideoFooter"
import VideoSideBar from "./components/sidebar/VideoSideBar"
/* import VideoHeader from "./components/header/VideoHeader" */

function Videos({likes, messages, shares, name, description, music, url}) {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handleStart(){
        /* Só consegui passar a condição utilizando operador de igualdade estrita */
        /* if(play === false) {
            videoRef.current.play()
            setPlay(true)
        }

        if(play === true) {
            videoRef.current.pause()
            setPlay(false)
        } */

        /*simplificação utilizando operador ternário - Se o estado atual for falso, o play é acionado setando o setPlay para true. Se não, é acionado o pause e tem o setPlay setado para false.*/
        (!play ? videoRef.current.play(setPlay(true)) : videoRef.current.pause(setPlay(!play)));
    }

    return (
        <div className='video'>
            
            <video 
                className="video-player"
                ref={videoRef}
                onClick={handleStart}
                loop
                src={url}
            >
            </video>
            {/* <VideoHeader /> */}
            <VideoSideBar 
                likes={likes}
                messages={messages}
                shares={shares}
            />
            <VideoFooter 
                name={name}
                description={description}
                music={music}
            />
        </div>
    )
}

export default Videos;