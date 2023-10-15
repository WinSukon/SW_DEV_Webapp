import Link from 'next/link';


const MenuItem = ({title,url}:{title:string,url:string}) => {
    return ( 
        <Link className="w-[120px] h-full bg-gray-100 pt-[8px] 
        text-center mt-auto mb-auto hover:bg-gray-200" href={url}>
            {title}
        </Link>
     );
}
 
export default MenuItem;