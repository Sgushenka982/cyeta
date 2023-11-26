import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import logo from '../resource/img/icons/logo-cyeta.svg'
import logoWhite from '../resource/img/icons/logo-cyeta-white.svg'

function Header(){
    let location = useLocation()
    return (
        <header className="content header">
            <div className="flex-wrapper">
                <img src={location.pathname === '/services' ? logoWhite : logo} alt="logo" className="logo"/>
                <div className="action-menu">
                    <nav className="menu">
                        <ul className="menu-list">
                            <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/">Home</NavLink></li>
                            <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/projects">Projects</NavLink></li>
                            <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/services">Services</NavLink></li>
                            <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="#">About us</NavLink></li>
                            <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="#">Contact us</NavLink></li>
                        </ul>
                    </nav>
                    <button className="contactUs"><span>Request a Quote</span></button>
                </div>
            </div>
        </header>
    )
}

export default Header