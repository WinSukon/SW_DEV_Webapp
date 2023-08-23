import style from "./Card.module.css"
import Image from "next/image";

const Card = () => {
    return ( 
        <div className={style.card}>
            <div className={style.cardimg}>
                <Image src={"/img/cardimg.avif"} alt='Product Picture' fill={true} objectFit="cover"></Image>

            </div>
            <div className={style.cardtext}>What you should know about vaccine</div>
        </div>
    );
}
 
export default Card;