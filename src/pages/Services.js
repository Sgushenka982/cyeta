import '../resource/css/Services.css'
import service1 from '../resource/img/our-services/residential-img.jpg';
import service2 from '../resource/img/our-services/commercial-img.jpg';
import back from '../resource/img/icons/go-back-icon.svg';
import arrow from '../resource/img/icons/arrow-up-right.svg';
import {NavLink} from "react-router-dom";

function Services(){
    return(
        <div className="background services">
            <div className="content">
                <div className="services-header">
                    <NavLink to="/"><img src={back} alt="backLink"/></NavLink>
                    <h1>OUR SERVICES</h1>
                    <p>
                        Discover top-tier building services tailored to both commercial and residential
                        needs with Cyeta LTD. Our seasoned team is dedicated to bringing your construction
                        and renovation dreams to life with precision and quality craftsmanship
                    </p>
                </div>
                <div className="services-content">
                    <div className="flex-wrapper">
                        <div className="services-img">
                            <img src={service1} alt="service1"/>
                            <div className="services-img__hoverContent">
                                <h3>Residential Services</h3>
                                <p>
                                    At Cyeta Limited, we’re all about creating amazing homes with
                                    top-notch quality. Working with us means turning your dream
                                    home into a reality, with every detail designed to perfection.
                                </p>
                                <NavLink to="/services/residential">Explore<img src={arrow} alt="arrow"/></NavLink>
                            </div>
                        </div>
                        <div className="services-img">
                            <img src={service2} alt="service2"/>
                            <div className="services-img__hoverContent">
                                <h3>Commercial Services</h3>
                                <p>
                                    At Cyeta Limited, we’re all about creating amazing homes with
                                    top-notch quality. Working with us means turning your dream
                                    home into a reality, with every detail designed to perfection.
                                </p>
                                <NavLink to="/services/commercial">Explore<img src={arrow} alt="arrow"/></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services