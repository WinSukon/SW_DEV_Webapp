import Image from "next/image";
import style from "./Banner.module.css"
const banner = ({name}:{name:string}) => {
    return ( 
        <div>

            <div className={style.banner}>
                {/* <h1>hello</h1> */}
                <Image src={"/img/CovidVaccineSurvey_Header.jpg"} 
                alt='cover' 
                fill={true} 
                objectFit="cover"></Image>
                <div className={style.bannerText}>
                    <h1>Our Services</h1>
                    <p>{name}</p>
                </div>
            </div>

  
        </div>


     );
}
 
export default banner;