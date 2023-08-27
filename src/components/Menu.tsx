import MenuItem from './MenuItem';
import style from './Menu.module.css'
import Image from 'next/image';

const Menu = () => {
    return ( 
        <div className="flex flex-row h-12 justify-end border-2">
            <MenuItem title='booking' url='/booking'/>
            <Image src={'/img/logo.avif'} className="h-[100%] w-auto" alt='logo' width={0} height={0} sizes='100vh'/>
        </div>
    );
}
 
export default Menu;