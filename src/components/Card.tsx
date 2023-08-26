import style from "./Card.module.css"
import Image from "next/image";

const Card = (prop:{title:string,img:string}) => {
    return ( 
        <div className={style.card}>
            <div className={style.cardimg}>
                <Image src={prop.img} alt='Product Picture' fill={true} objectFit="cover"></Image>

            </div>
            <div className={style.cardtext}>{prop.title}</div>
        </div>
    );
}
 
export default Card;