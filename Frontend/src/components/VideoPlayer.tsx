import {useRef,useEffect} from 'react'

const VideoPlayer = ({vdoSrc,isPlaying}:{vdoSrc:string,isPlaying:boolean}) => {
    const vdoRef = useRef<HTMLVideoElement>(null)


    useEffect(()=>{
        isPlaying ?  vdoRef.current?.play(): vdoRef.current?.pause();
    },[isPlaying])

    return ( 
        <video className='w-[50%]' src={vdoSrc} ref={vdoRef} muted loop controls></video>

     );
}
 
export default VideoPlayer;