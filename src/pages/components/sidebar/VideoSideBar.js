import React, { useState } from 'react'
import './videoSideBar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSideBar ({likes, messages, shares}) {

        const [liked, setLiked] = useState(false)

        function handleLike () {
            setLiked(!liked)
        }

    return (
        <div className="videoSideBar">
            <div 
                className='videoSideBar-Options'
                onClick={handleLike}
            >
                    { liked ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon fontSize='large' />}
                    <p>{ liked ? likes + 1 : likes }</p>
            </div>
            <div className='videoSideBar-Options'>
                <ChatIcon fontSize='large'/>

                <p>{ messages }</p>
            </div>
            <div className='videoSideBar-Options'>
                <ShareIcon fontSize='large'/>
                <p>{ shares }</p>
            </div>
        </div>
    )}


export default VideoSideBar;