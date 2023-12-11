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
                            Our journey with the Home in St Heliers began with a blank canvas—a concrete slab awaiting transformation.
                            Tasked with creating a warm retreat, our team embarked on a unique project showcasing versatility and commitment to excellence.
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
                        The client envisioned a cozy haven, and our team embraced the challenge of the unconventional site.
                        From framing to finishing touches, every step was meticulously planned to bring the dream to life.
                        The non-standard nature of the project, dictated by the distinctive landscape, was navigated with expertise.
                        Innovative design solutions complemented the surroundings, resulting in a cozy haven seamlessly integrated with the environment.
                        Efficiency was paramount, and we transformed the concrete slab into a finished home in just six months.
                        This achievement speaks to our dedication to timelines without compromising quality.
                        Handling every aspect in-house, from groundwork to the final coat of paint, showcased our comprehensive capabilities.
                        The Home in St Heliers stands as an example of how our team's expertise, adaptability, and passion for quality construction turn a simple concrete slab into a bespoke dwelling. It's more than a house; it's a home reflecting the unique character of both the landscape and the client's vision.
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