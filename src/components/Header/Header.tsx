import React from 'react';
import './Header.css';
import logo from '../../images/icons/logo.png';
import zoom from '../../images/icons/zoom.svg';
import profile from '../../images/icons/profile.svg';
import basket from '../../images/icons/basket.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__conteiner'>
                <img src={logo} className='header__logo' />
                <form className='header__form form'>
                    <input className='form__input'></input>
                    <img src={zoom} className='form__icon' />
                </form>
                <img src={profile} className='header__profile' />
                <img src={basket} className='header__basket' />
            </div>
        </header>
    );
}

export default Header;