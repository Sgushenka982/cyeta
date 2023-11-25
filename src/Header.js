import React from "react";

function Header(){
    return (
        <header className="content header">
            <div className="flex-wrapper">
                <div className="logo">
                    <div>
                        (CYETA)
                    </div>
                </div>
                <div className="action-menu">
                    <nav className="menu">
                        <ul className="menu-list">
                            <li className="menu-list__link"><a href="#">Home</a></li>
                            <li className="menu-list__link"><a href="#">Projects</a></li>
                            <li className="menu-list__link"><a href="#">Services</a></li>
                            <li className="menu-list__link"><a href="#">About us</a></li>
                            <li className="menu-list__link"><a href="#">Contact us</a></li>
                        </ul>
                    </nav>
                    <button className="contactUs"><span>Request a Quote</span></button>
                </div>
            </div>
        </header>
    )
}

export default Header