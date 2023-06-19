import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {

    return (
        <div className="videoFooter">
            <div className="videoFooter-text">
                <h3>@{ name }</h3>
                <p>{ description }</p>
                <div className="videoFooter-music">
                    <MusicNoteIcon className="videoFooterIcon"/>
                    <div className="videoFooterMusicTitle">
                        <p>{ music }</p>
                    </div>
                    
                </div>
            </div>

            <img 
            src="https://firebasestorage.googleapis.com/v0/b/tiktok---jornada-92005.appspot.com/o/logo1.png?alt=media&token=b4be2423-fb3e-46ee-afe6-959e46284c5f"
            className="logoPrincipal"
            alt="logo cortes de podcast"
            />

            <img 
                className="videoFooter-record"
                alt="Imagem de um vinil girando"
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
            />

        </div>
    )
}

export default VideoFooter;
