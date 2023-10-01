'use client'
import {useReducer} from 'react'
import Card from "./Card";
import Link from 'next/link';


const CardPanel = () => {


    const reducerRating=(hospitalRating:Map<string,Number>,action:{'type':string,'name':string,'rating':Number})=>{
        switch(action.type){
            case 'add':
                return new Map(hospitalRating.set(action.name,action.rating));
            case 'delete':
                hospitalRating.delete(action.name);
                return new Map(hospitalRating);
            default:
                return hospitalRating;
        }
    }
    const [hospitalRating,dispatchRating] = useReducer(reducerRating,new Map<string,Number>())

    const data =[{
                    hid:'001',
                    title:'Chulalongkorn Hospital', 
                    imgSrc:'/img/Chulalongkorn Hospital.jpg'
                 },
                 {
                    hid:'002',
                    title:'Rajavithi Hospital' ,
                    imgSrc:'/img/Rajavithi Hospital.jpg' 

                 },
                 {
                    hid:'003',
                    title:'Thammasat University Hospital' ,
                     imgSrc:'/img/Thammasat University Hospital.jpg' 
                 }]


    return (  
        <div className="flex flex-col">
            <div className="flex flex-row ">

                {data.map((hos)=>(
                    <Link href={`/hospital/${hos.hid}`}>
                          <Card title={hos.title}
                        imgSrc={hos.imgSrc}
                        ratingHandler={(name:string,value:Number)=>dispatchRating({'type':'add','name':name,'rating':value})} 
                        hospitalRating={hospitalRating}
                    />
                    </Link>
              
                ))}

            </div>
            <div>
                <div className='text-xl'>Rating list</div>
                <div className="p-3 ">

                    {Array.from(hospitalRating).map((data)=>
                    <div onClick={()=>dispatchRating({'type':'delete','name':data[0],'rating':0})}>
                    {data[0]} Rating = {data[1].toString()}</div>)}
    
                </div>
            </div>
        </div>  
    );
}
 
export default CardPanel;