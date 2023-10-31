
import Card from "./Card";
import Link from 'next/link';

const hospitalCatalog = async ({hosJson}:{hosJson:Object}) => {
    const hosJsonReady = await hosJson;
    return ( 
        <div className="flex flex-row flex-wrap p-[10px] justify-around">
            { hosJsonReady.data.map((hos:Object)=>(
                <Link href={`/hospital/${hos.id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8">
                    <Card title={hos.name}
                    imgSrc={hos.picture}
                    />
                </Link>
            
                ))}
        </div>
        
    );
}
 
export default hospitalCatalog;