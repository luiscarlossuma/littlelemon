import React from 'react';
import Logo from './icons_assets/Logo.svg';

function Header(){
    return (
        <header className='logo'>
            <img src={Logo} alt='little lemons logo'/>
        </header>
    )
}
export default Header;