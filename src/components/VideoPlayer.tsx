import {useRef} from 'react'

const VideoPlayer = ({vdoSrc,isPlaying}:{vdoSrc:string,isPlaying:boolean}) => {
    const vdoRef = useRef<HTMLVideoElement>(null)
    if(isPlaying){
        vdoRef.current?.play();
    }
    else{
        vdoRef.current?.pause();
    }

    return ( 
        <video className='w-[50%]' src={vdoSrc} ref={vdoRef} muted loop controls></video>

     );
}
 
export default VideoPlayer;