import React from 'react';
import {Link} from 'react-router-dom';
import user from '../../Images/user.png';
import './Header.scss';

function Header(){
    return (
        <div className='header'>
            <Link to="/">
                <div className='logo'>Movie app</div>
            </Link>
            <div className='user-image'>
                <img
                    src={user}
                    alt="User Image"
                />
            </div>
        </div>
    );
};

export default Header;