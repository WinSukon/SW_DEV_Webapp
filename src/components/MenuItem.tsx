import Link from 'next/link';


const MenuItem = ({title,url}:{title:string,url:string}) => {
    return ( 
        <Link className="item-container" href={url}>{title}</Link>
     );
}
 
export default MenuItem;