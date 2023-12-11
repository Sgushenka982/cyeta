import {NavLink} from "react-router-dom";
import back from "../resource/img/icons/go-back-icon-black.svg";
import headerImg from "../resource/img/project-3/hero-project-3.png"
import img1 from "../resource/img/project-3/key-1.png"
import img2 from "../resource/img/project-3/key-2.png"
import img3 from "../resource/img/project-3/key-3.png"
import "../resource/css/Project.css"
import React from "react";
import ContactUsFooter from "../templates/ContactUsFooter";

const ProjectCastorBay = () => {
    const footerH1 = 'CONTACT US TODAY TO DISCUSS YOUR OWN DREAM HOME PROJECT'
    return (
        <div className="someProject">
            <div className="content project-header">
                <div className="project-header__back">
                    <NavLink to="/projects"><img src={back} alt="backLink"/> PROJECTS</NavLink>
                </div>
                <h1>PRESTIGIOUS HOME RENOVATION AR CATOR BAY</h1>
                <div className="project-title">
                    <div id="type">
                        <h3 className="project-header__type">TYPE</h3>
                        <p className="header-type__content">Residential Services</p>
                    </div>
                    <div id="year">
                        <h3 className="project-header__year">YEAR</h3>
                        <p className="header-year__content">2023</p>
                    </div>
                    <div id="description">
                        <h3 className="project-header__description">DESCRIPTION</h3>
                        <p className="header-description__content">
                            Step into refined living with our Luxe Home Renovation in Castor Bay.
                            This extraordinary project reflects an unwavering commitment to excellence and an eye for detail.
                            The residence underwent a complete transformation, including structural enhancements and a captivating blend of cladding materials, such as weatherboard, stone, and cedar.
                        </p>
                    </div>
                </div>
            </div>
            <div className="background">
                <img src={headerImg} alt="img"/>
            </div>
            <div className="content project-content">
                <div className="project-overview">
                    <h3>Project Overview</h3>
                    <p>
                        Inspired by a client with a vision for opulence, this renovation aimed to craft a home radiating sophistication.
                        Strategic reframing bolstered structural integrity, setting the stage for a living space seamlessly fusing modern design with timeless elegance.
                        Varied cladding materials, including weatherboard for classic charm, stone for natural grandeur, and cedar for inviting warmth, were introduced to fashion a façade that exudes grace.
                        The interior transformation maximized natural light, integrated premium materials, and showcased a dedication to luxurious living.
                        This collaborative effort resulted in the Prestigious Home at Castor Bay, a masterpiece pushing the boundaries of design possibilities and bringing dreams to life.
                    </p>
                </div>
                <div className="keyFeatures">
                    <h3>Key Features</h3>
                    <div className="flex-wrapper">
                        <div>
                            <img src={img1} alt="img1"/>
                            <p>
                                Utilization of premium, sustainable materials for longevity and
                                elegance.
                            </p>
                        </div>
                        <div>
                            <img src={img2} alt="img2"/>
                            <p>
                                Custom architectural design that maximizes natural light and
                                ocean views
                            </p>
                        </div>
                        <div>
                            <img src={img3} alt="img3"/>
                            <p>
                                Creation of open-concept living spaces that flow effortlessly
                                from indoors to outdoors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactUsFooter footerH1={footerH1}/>
        </div>
    )
}

export default ProjectCastorBay