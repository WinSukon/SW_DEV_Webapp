import style from "./Card.module.css"
import Image from "next/image";
import ClientCompCard from "./InteractiveCard";
import Rating from '@mui/material/Rating';

const Card = (prop:{title:string,imgSrc:string}) => {
    return ( 
        //! using tailwind css
        <ClientCompCard>
            <div className="w-full h-[70%] relative rounded-t-lg ">
                <Image src={prop.imgSrc} alt='Product Picture' fill={true} className="object-cover rounded-t-lg"></Image>

            </div>
            <div className="w-full h-[20%] p-[10px] text-center ">{prop.title}</div>
            <div className="w-full h-[10%] px-3">     
                <Rating  value={2.5} precision={0.5} size="small" readOnly />
            </div>
        </ClientCompCard>
            
        
    );
}
 
export default Card;