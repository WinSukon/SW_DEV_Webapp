'use client'

import Card from "./Card";
import Link from 'next/link';

const hospitalCatalog = ({hosJson}:{hosJson:Object}) => {
    return ( 
        <div className="flex flex-col">
            <div className="flex flex-row ">

                {hosJson.data.map((hos:Object)=>(
                    <Link href={`/hospital/${hos.id}`}>
                        <Card title={hos.name}
                        imgSrc={hos.picture}
                    />
                    </Link>
            
                ))}
                

            </div>
        </div> 
    );
}
 
export default hospitalCatalog;