import MenuItem from './MenuItem';
import style from './Menu.module.css'
import Image from 'next/image';

import {getServerSession} from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';

const Menu = async () => {

    const session = await getServerSession(authOptions)
    return ( 

        <div className="flex flex-row h-12 justify-between border-2">
            <div className='flex'>
                {session ? 
                <Link href="/api/auth/signout" className='w-[120px] h-full bg-gray-100 pt-[8px] 
                text-center mt-auto mb-auto hover:bg-gray-200' >
                    Sign-Out
                </Link> 
                : 
                <Link href="/api/auth/signin" className=' w-[120px] h-full bg-gray-100 pt-[8px] 
                text-center mt-auto mb-auto hover:bg-gray-200'>
                    Sign-In
                </Link>}
            </div>
       

            <div className='flex flex-row justify-end'>
                <MenuItem title='booking' url='/booking'/>
                <Image src={'/img/logo.avif'} className="h-[100%] w-auto" alt='logo' width={0} height={0} sizes='100vh'/>
            </div>
        </div>
    );
}
 
export default Menu;