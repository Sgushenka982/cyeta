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
                        <input type="text" placeholder="Enter you email for a free quote"/>
                        <p>© 2021 Cyeta LTD. All rights reserved</p>
                    </div>
                </div>
                <div className="footer-menu">
                    <div className="logo">(CYETA)</div>
                    <nav className="menu">
                        <ul className="menu-list">
                            <li className="menu-list__link"><a href="#">Home</a></li>
                            <li className="menu-list__link"><a href="#">Projects</a></li>
                            <li className="menu-list__link"><a href="#">Services</a></li>
                            <li className="menu-list__link"><a href="#">About us</a></li>
                            <li className="menu-list__link"><a href="#">Contact us</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer