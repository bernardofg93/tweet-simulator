import React from 'react';
import Logo from '../../assets/img/twitter-logo.png';
import './Header.scss';

export const Header = () => {
    return (
        <div className="header">
            <img
                src={Logo}
                alt="tweet"
            />
            <h1>Tweet Simulator</h1>
        </div>

    )
}