import Image from "next/image";
import style from "./Banner.module.css"
const banner = ({name}:{name:string}) => {
    return ( 
        <div>

            {/* <div className={style.banner}>

                <Image src={"/img/CovidVaccineSurvey_Header.jpg"} 
                alt='cover' 
                fill={true} 
                objectFit="cover"></Image>
                <div className={style.bannerText}>
                    <h1 className="text-6xl font-medium">Our Services</h1>
                    <p className="text-2xl font-serif">{name}</p>
                </div>
            </div> */}


            <div className="block h-[60vh] w-[100vw] p-[5px] m-[0px] relative">

                <Image src={"/img/CovidVaccineSurvey_Header.jpg"} 
                alt='cover' 
                fill={true} 
                objectFit="cover"></Image>
                <div className="relative top-[100px] z-[20] text-center text-white text-[30px] drop-shadow-[2px_2px_rgba(0,0,0)] ">
                    <h1 className="text-6xl font-medium">Our Services</h1>
                    <p className="text-2xl font-serif">{name}</p>
                </div>
            </div>
  
        </div>


     );
}
 
export default banner;