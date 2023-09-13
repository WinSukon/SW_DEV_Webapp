import style from "./Card.module.css"
import Image from "next/image";
import ClientCompCard from "./InteractiveCard";


const Card = (prop:{title:string,imgSrc:string,ratingHandler:Function,hospitalRating:Map<string,Number>}) => {
    return ( 
        //! using tailwind css
        <ClientCompCard title={prop.title} ratingHandler={prop.ratingHandler} hospitalRating={prop.hospitalRating}>
            <div className="w-full h-[70%] relative rounded-t-lg ">
                <Image src={prop.imgSrc} alt='Product Picture' fill={true} className="object-cover rounded-t-lg"></Image>

            </div>
            <div className="w-full h-[20%] p-[10px] text-center ">{prop.title}</div>
         
        </ClientCompCard>
            
        
    );
}
 
export default Card;