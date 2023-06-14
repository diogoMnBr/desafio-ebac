import React, { useRef, useState } from 'react';
import './video.css';

function Videos(props) {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handleStart(){
        /* Só consegui passar a condição utilizando comparador do último nível "===" */
        if(play === false) {
            videoRef.current.play()
            setPlay(true)
        }

        if(play === true) {
            videoRef.current.pause()
            setPlay(true)
        }
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
        </div>
    )
}

export default Videos;