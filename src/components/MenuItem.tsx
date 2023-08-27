import Link from 'next/link';


const MenuItem = ({title,url}:{title:string,url:string}) => {
    return ( 
        <Link className="w-[120px] text-center mt-auto mb-auto " href={url}>{title}</Link>
     );
}
 
export default MenuItem;