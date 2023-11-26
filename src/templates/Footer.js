import logo from '../resource/img/icons/logo-cyeta-white.svg'
import arrow from '../resource/img/icons/arrow-up-right-white.svg'
import {NavLink} from "react-router-dom";

function Footer(){
    return (
        <div className="background">
            <footer className="content footer">
                <div className="flex-wrapper">
                    <div className="footer-content">
                        <div className="footer-content__item">Auckland, New Zealand</div>
                        <div className="footer-content__item">
                            <h5>CONTACT US</h5>
                            <div>022 410 9004</div>
                            <div>cyetaltd@gmail.com</div>
                        </div>
                        <div className="footer-content__item">
                            <h5>SERVICES</h5>
                            <div>Residential</div>
                            <div>Commercial</div>
                            <div>Subcontracting</div>
                        </div>
                    </div>
                    <div className="footer-feedback">
                        <div className="footer-feedback__input">
                            <input type="text" placeholder="Enter you email for a free quote"/>
                            <img src={arrow} alt=""/>
                        </div>
                        <p>© 2021 Cyeta LTD. All rights reserved</p>
                    </div>
                </div>
                <div className="footer-menu">
                    <img className="logo" alt="logo" src={logo}/>
                    <nav className="menu">
                        <ul className="menu-list">
                            <li className="menu-list__link"><NavLink to="">Home</NavLink></li>
                            <li className="menu-list__link"><NavLink to="/projects">Projects</NavLink></li>
                            <li className="menu-list__link"><NavLink to="/services">Services</NavLink></li>
                            <li className="menu-list__link"><NavLink to="#">About us</NavLink></li>
                            <li className="menu-list__link"><NavLink to="#">Contact us</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer