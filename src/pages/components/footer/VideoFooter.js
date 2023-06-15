import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter(props) {

    return (
        <div className="videoFooter">
            <div className="videoFooter-text">
                <h3>@bornprodutora</h3>
                <p>Descrição do Vídeo</p>
                <div className="videoFooter-music">
                    <MusicNoteIcon className="videoFooterIcon"/>
                    <div className="videoFooterMusicTitle">
                        <p>Título da musica</p>
                    </div>
                    
                </div>
            </div>

            <img 
                className="videoFooter-record"
                alt="Imagem de um vinil girando"
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
            />

        </div>
    )
}

export default VideoFooter
