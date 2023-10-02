'use client'
import {useState} from 'react'
import VideoPlayer from "./VideoPlayer";

const PromoteCard = () => {
    const [playing,setPlay] = useState(true)

    return ( 
        <div className='flex flex-row w-[60vw] shadow-lg p-2 justify-around bg-slate-300 m-5 rounded-md'>
        
            <VideoPlayer vdoSrc="./video/getvaccine.mp4" isPlaying={playing} ></VideoPlayer>

      


            <div className="flex flex-col  justify-between">
                <div className="text-lg items-center m-5">Get your vaccine today</div>
                <button className='m-5 p-3  bg-sky-400 rounded-xl block hover:bg-sky-500' onClick={()=>{setPlay(!playing)}}>pause/play</button>
            </div>
        </div>
     );
}
 
export default PromoteCard;