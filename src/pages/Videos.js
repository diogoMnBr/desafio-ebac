import React, { useRef, useState } from 'react';
import './video.css';
import VideoFooter from "./components/footer/VideoFooter"

function Videos(props) {

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
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
                
            >
            </video>
            {/* Side bar */}
            
            <VideoFooter className="videoFooterComponent"/>
        </div>
    )
}

export default Videos;