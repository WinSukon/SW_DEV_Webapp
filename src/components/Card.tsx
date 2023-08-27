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
        <div className="w-[250px] h-[300px] rounded-lg shadow-lg pt-10 m-8">
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={prop.imgSrc} alt='Product Picture' fill={true} className="object-cover rounded-t-lg"></Image>

            </div>
            <div className="w-full h-[30%] p-[10px]">{prop.title}</div>
        </div>
    );
}
 
export default Card;