import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/shop">Shop</a>
                <a href="/inventory">Inventory</a>
                <a href="/home">Home</a>
            </div>
        </nav>
    );
};

export default Header;