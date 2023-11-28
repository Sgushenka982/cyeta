import {NavLink} from "react-router-dom";
import back from "../resource/img/icons/go-back-icon-black.svg";
import headerImg from "../resource/img/project-1/residential-deck-hero.jpg"
import img1 from "../resource/img/project-1/key-1.jpg"
import img2 from "../resource/img/project-1/key-2.jpg"
import img3 from "../resource/img/project-1/key-3.jpg"
import "../resource/css/Project.css"
import React from "react";
import ContactUsFooter from "../templates/ContactUsFooter";

const ProjectDeck = () => {

    const footerH1 = 'READY TO TRANSFORM YOUR OUTDOOR SPACE? CONTACT US TODAY TO START YOUR JOURNEY TOWARD A STUNNING DECK!'

    return (
        <div className="someProject">
            <div className="content project-header">
                <div className="project-header__back">
                    <NavLink to="/projects"><img src={back} alt="backLink"/> PROJECTS</NavLink>
                </div>
                <h1>RESIDENTIAL DECK CONSTRUCTION</h1>
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
                            This project involved the design and construction of a spacious deck that seamlessly integrates with
                            the natural surroundings. The client’s vision was to have a functional yet aesthetically pleasing outdoor
                            space that would serve as an extension of their home. Our team worked closely with the client to ensure
                            their budget was accommodated without compromising on quality or design.
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
                        At Cyeta Limited, we take pride in our commitment to delivering exceptional results while respecting
                        our clients’ budgets. We recently completed a breathtaking residential deck construction project in
                        the picturesque suburb of Auckland, where we successfully married functionality, aesthetics, and
                        cost-efficiency. The project was commissioned by a discerning homeowner looking to enhance their
                        outdoor living space and create a perfect retreat for family gatherings and relaxation.
                    </p>
                </div>
                <div className="keyFeatures">
                    <h3>Key Features</h3>
                    <div className="flex-wrapper">
                        <div>
                            <img src={img1} alt="img1"/>
                            <p>
                                Custom deck design tailored to the client’s preferences and
                                the property’s layout
                            </p>
                        </div>
                        <div>
                            <img src={img2} alt="img2"/>
                            <p>
                                Use of sustainable materials for durability and low maintenance.
                            </p>
                        </div>
                        <div>
                            <img src={img3} alt="img3"/>
                            <p>
                                Incorporation of a built-in seating area, perfect for hosting guests
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactUsFooter footerH1={footerH1}/>
        </div>
    )
}

export default ProjectDeck