'use client'

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {useSession} from 'next-auth/react';

const banner = ({name}:{name:string}) => {

    const [index,setIndex] = useState(0);
    const imgSrc=["/img/CovidVaccineSurvey_Header.jpg",
                    "/img/covid-19-vaccination.webp",
                    "/img/vaccine-vial-scaled.jpg",
                    "/img/vaccine-banner.jpg"];
    
    const router=useRouter()

    const {data:session} = useSession();
    return ( 
        
            <div className="block h-[80vh] w-[100vw] m-[0px] relative" onClick={()=>(setIndex(index+1))}>

                <Image src={imgSrc[index%4]} 
                alt='cover' 
                fill={true} 
                objectFit="cover"></Image>
                <div className="relative top-[100px] z-[20] text-center text-white text-[30px] drop-shadow-[2px_2px_rgba(0,0,0)] ">
                    <h1 className="text-6xl font-medium">Our Services</h1>
                    <p className="text-2xl font-serif">{name}</p>

                </div>
                {session ? 
                <div className="absolute z-30 top-5 right-10 font-semibold text-cyan-800 text-xl">Hello {session.user?.name}</div> : null
                }
                <button className="absolute m-6 px-2 py-1 rounded-md text-lg bg-white bottom-0 right-0 hover:bg-neutral-200" 
                onClick={(e)=>{e.stopPropagation(); router.push('/hospital')}}>Hospital Info</button>

            </div>
     );
}
 
export default banner;