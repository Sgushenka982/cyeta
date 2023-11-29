import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import logo from '../resource/img/icons/logo-cyeta.svg'
import logoWhite from '../resource/img/icons/logo-cyeta-white.svg'
import closeIcon from '../resource/img/icons/close-icon.svg'
import mainIcon from '../resource/img/icons/main-icon.svg'
import phoneIcon from '../resource/img/icons/phone-icon.svg'
import locationIcon from '../resource/img/icons/location-icon.svg'

function Header(){
    let location = useLocation()
    const openCloseContacts =()=>{
        const el = document.getElementById('contacts')
        const styles = window.getComputedStyle(el)
        if(styles.getPropertyValue("display") === 'none')
            el.style.display='block'
        else
            el.style.display='none'
    }
    return (
        <React.Fragment>
            <div className="background header">
                <header className="content ">
                    <div className="flex-wrapper">
                        <img src={location.pathname === '/services' ? logoWhite : logo} alt="logo" className="logo"/>
                        <div className="action-menu">
                            <nav className="menu">
                                <ul className="menu-list">
                                    <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/">Home</NavLink></li>
                                    <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/projects">Projects</NavLink></li>
                                    <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/services">Services</NavLink></li>
                                    <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="#">About us</NavLink></li>
                                    <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="#" onClick={openCloseContacts}>Contact us</NavLink></li>
                                </ul>
                            </nav>
                            <button className="contactUs"><span>Request a Quote</span></button>
                        </div>
                    </div>
                    <div id="contacts">
                        <div className="flex-wrapper">
                            <h2>CONTACT US</h2>
                            <div className="contacts-content">
                                <div className="contacts-content__item">
                                    <img src={locationIcon} alt=""/>
                                    <span>Auckland, New Zealand</span>
                                </div>
                                <div className="contacts-content__item">
                                    <img src={phoneIcon} alt=""/>
                                    <span>022 410 9004</span>
                                </div>
                                <div className="contacts-content__item">
                                    <img src={mainIcon} alt=""/>
                                    <span>cyetaltd@gmail.com</span>
                                </div>
                            </div>
                            <img className="close" src={closeIcon} alt="closeIcon" onClick={openCloseContacts}/>
                        </div>
                    </div>
                </header>
            </div>
        </React.Fragment>
    )
}

export default Header