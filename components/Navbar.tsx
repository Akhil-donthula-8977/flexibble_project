import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { NavLinks } from '@/constants'
import Authprovider from './Authprovider'
const Navbar = () => {
    const session={}
  return (
    <nav>
        <div className='flexBetween navbar'>
            <div className='flex-1 flexStart gap-10'> 
                 <Link href="/">
                    <Image 
                    src="./logo.svg"
                    height={42}
                    width={115}
                    alt="flexibble"></Image>
                 </Link>
                 <ul className='xl:flex hidden text-small gap-7'>
                    {NavLinks.map((link)=>{
                        return (
                            <Link href={link.href} key={link.key}>
                                {link.text}
                            </Link>
                        )
                    })}
                 </ul>
            </div>
            <div className='flexCenter gap-4'>
               {
                session?(
                 <>
                 userPic
                 </>
                ):(
                    <Authprovider/>
                )
               }
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar