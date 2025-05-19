import React from 'react';
import Image from 'next/image';
import { Hashmint_Logo } from '@/assets';
const NavBar = () => {

    const NavLinks = [
        {
            title: 'Home',
            slug: '/'
        },
        {
            title: 'About Us',
            slug: '/#about'
        }
    ]

    return (
        <div>
            <Image src={Hashmint_Logo} alt='Hashmint Logo' width={150} height={150} />
        </div>
    )
}

export default NavBar
