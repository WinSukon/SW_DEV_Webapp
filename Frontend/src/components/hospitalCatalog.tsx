'use client'

import Card from "./Card";
import Link from 'next/link';

const hospitalCatalog = ({hosJson}:{hosJson:Object}) => {
    return ( 
        <div className="flex flex-col">
            <div className="flex flex-row ">

                {hosJson.data.map((hos)=>(
                    <Link href={`/hospital/${hos._id}`}>
                        <Card title={hos.name}
                        imgSrc={hos.picture}
                        ratingHandler={(name:string,value:Number)=>dispatchRating({'type':'add','name':name,'rating':value})} 
                        hospitalRating={hospitalRating}
                    />
                    </Link>
            
                ))}
                

            </div>
        </div> 
    );
}
 
export default hospitalCatalog;