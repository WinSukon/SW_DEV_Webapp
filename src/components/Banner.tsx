import Image from "next/image";
const banner = () => {
    return ( 
        <div>
            <h1>hello</h1>
            <Image src={"/img/CovidVaccineSurvey_Header.jpg"} alt='cover' fill={true} objectFit="cover"></Image>
        </div>
     );
}
 
export default banner;