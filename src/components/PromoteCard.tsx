'use client'
import {useState} from 'react'
import VideoPlayer from "./VideoPlayer";

const PromoteCard = () => {
    const [playing,setPlay] = useState(true)
    return ( 
        <div className='flex flex-row justify-around'>
           <div className="flex m-5">
                <VideoPlayer vdoSrc="./video/getvaccine.mp4" isPlaying={playing} ></VideoPlayer>

           </div>

    
            <div className="flex flex-col  justify-between">
                <div className="text-lg items-center">video</div>
                <button className='m-5 p-3 border-solid border-2 border-sky-500' onClick={()=>{setPlay(!playing)}}>pause/play</button>
            </div>
        </div>
     );
}
 
export default PromoteCard;