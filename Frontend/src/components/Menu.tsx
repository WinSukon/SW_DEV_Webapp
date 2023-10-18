import MenuItem from './MenuItem';
import style from './Menu.module.css'
import Image from 'next/image';

import {getServerSession} from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';

const Menu = async () => {

    const session = await getServerSession(authOptions)
    if(session) console.log(session);
    return ( 

        <div className="flex flex-row h-12 justify-between border-2">
            <div className='flex'>
                {session ? 
                <Link href="/api/auth/signout" className=' items-center absolute  h-full px-2 text-sm border-solid border-2 border-sky-500 w-[120px]' >
                    {/* <div className="">Sign-Out</div> */}
                    Sign-Out
                </Link> 
                : 
                <Link href="/api/auth/signin" className=' items-center absolute  h-full px-2  text-sm border-solid border-2 border-sky-500  w-[120px]'>
                    {/* <div className="">Sign-In</div> */}
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