
import Card from "./Card";
import Link from 'next/link';

const hospitalCatalog = async ({hosJson}:{hosJson:Object}) => {
    const hosJsonReady = await hosJson;
    return ( 
        <div className="flex flex-col">
            <div className="flex flex-row ">

                { hosJsonReady.data.map((hos:Object)=>(
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