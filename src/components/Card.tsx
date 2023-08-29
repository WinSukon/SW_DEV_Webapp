import style from "./Card.module.css"
import Image from "next/image";

const Card = (prop:{title:string,imgSrc:string}) => {
    return ( 
        // <div className={style.card}>
        //     <div className={style.cardimg}>
        //         <Image src={prop.imgSrc} alt='Product Picture' fill={true} objectFit="cover"></Image>

        //     </div>
        //     <div className={style.cardtext}>{prop.title}</div>
        // </div>

        //! using tailwind css
        <div className="w-[250px] h-[300px] rounded-lg shadow-lg  m-8  
        transition ease-in-out delay-150 hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="w-full h-[70%] relative rounded-t-lg ">
                <Image src={prop.imgSrc} alt='Product Picture' fill={true} className="object-cover rounded-t-lg"></Image>

            </div>
            <div className="w-full h-[30%] p-[10px] text-center ">{prop.title}</div>
        </div>
    );
}
 
export default Card;