import {NavLink} from "react-router-dom";
import back from "../resource/img/icons/go-back-icon-black.svg";
import headerImg from "../resource/img/project-4/hero-project-4.png"
import img1 from "../resource/img/project-4/key-1.png"
import img2 from "../resource/img/project-4/key-2.png"
import img3 from "../resource/img/project-4/key-3.png"
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
                <h1>COZY HOUSE TRANSFORMATION AT ST HELIERS</h1>
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
                            Our journey with the Cozy House at St Heliers began with a blank canvas—a concrete slab awaiting the magic of transformation.
                            Tasked with converting this foundation into a warm and inviting home, our team embarked on a unique project that showcased our versatility and commitment to excellence.
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
                        At Cyeta Limited, we are thrilled to showcase our latest masterpiece—a luxury new build home in the
                        exclusive coastal neighborhood of Kohimarama, Auckland. This project represents the epitome of
                        modern design, craftsmanship, and opulence in one of the city’s most sought-after areas.
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
                                Creation of open-concept living spaces that flow effortlessly
                                from indoors to outdoors.
                            </p>
                        </div>
                        <div>
                            <img src={img3} alt="img3"/>
                            <p>
                                Custom architectural design that maximizes natural light and
                                ocean views
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