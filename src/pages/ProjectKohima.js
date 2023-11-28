import {NavLink} from "react-router-dom";
import back from "../resource/img/icons/go-back-icon-black.svg";
import headerImg from "../resource/img/project-2/hero-project-2.jpg"
import img1 from "../resource/img/project-2/key-1.jpg"
import img2 from "../resource/img/project-2/key-2.jpg"
import img3 from "../resource/img/project-2/key-3.jpg"
import "../resource/css/Project.css"
import React from "react";
import ContactUsFooter from "../templates/ContactUsFooter";

const ProjectKohima = () => {
    const footerH1 = 'CONTACT US TODAY TO DISCUSS YOUR OWN DREAM HOME PROJECT'
    return (
        <div className="someProject">
            <div className="content project-header">
                <div className="project-header__back">
                    <NavLink to="/projects"><img src={back} alt="backLink"/> PROJECTS</NavLink>
                </div>
                <h1>LUXURY NEW BUILD HOME IN KOHIMARAMA</h1>
                <table>
                    <thead>
                    <tr>
                        <th className="project-header__type">TYPE</th>
                        <th className="project-header__year">YEAR</th>
                        <th className="project-header__description">DESCRIPTION</th>
                    </tr>
                    <tr className="project-header__spaceBetweenTableRows"></tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Residential Services</td>
                        <td>2023</td>
                        <td>
                            This prestigious new build home project began with a vision to create a residence that
                            harmonizes
                            seamlessly with its surroundings while providing the utmost in luxury and comfort. Our team
                            meticulously
                            executed this vision from the ground up, starting with the construction of a solid concrete
                            slab foundation.
                        </td>
                    </tr>
                    </tbody>
                </table>
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

export default ProjectKohima