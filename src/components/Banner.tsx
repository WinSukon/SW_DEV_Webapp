'use client'

import { useState } from "react";

import Image from "next/image";
import style from "./Banner.module.css"
const banner = ({name}:{name:string}) => {

    const [index,setIndex] = useState(0);
    const imgSrc=["/img/CovidVaccineSurvey_Header.jpg","/img/covid-19-vaccination.webp","/img/vaccine-vial-scaled.jpg","/img/vaccine-banner.jpg"];

    return ( 
        
            <div className="block h-[60vh] w-[100vw] p-[5px] m-[0px] relative" onClick={()=>(setIndex(index+1))}>

                <Image src={imgSrc[index%4]} 
                alt='cover' 
                fill={true} 
                objectFit="cover"></Image>
                <div className="relative top-[100px] z-[20] text-center text-white text-[30px] drop-shadow-[2px_2px_rgba(0,0,0)] ">
                    <h1 className="text-6xl font-medium">Our Services</h1>
                    <p className="text-2xl font-serif">{name}</p>
                </div>
                


            </div>
  
        


     );
}
 
export default banner;