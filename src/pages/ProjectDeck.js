import {NavLink, useLocation} from "react-router-dom";
import back from "../resource/img/icons/go-back-icon-black.svg";
import headerImg from "../resource/img/project-1/residential-deck-hero.jpg"
import img1 from "../resource/img/project-1/key-1.jpg"
import img2 from "../resource/img/project-1/key-2.jpg"
import img3 from "../resource/img/project-1/key-3.jpg"
import "../resource/css/Project.css"
import React from "react";
import ContactUsFooter from "../templates/ContactUsFooter";

const ProjectDeck = () => {
    let location = useLocation()
    const path = location.pathname

    const footerH1 = 'READY TO TRANSFORM YOUR OUTDOOR SPACE? CONTACT US TODAY TO START YOUR JOURNEY TOWARD A STUNNING DECK!'

    let delimiterClass

    if(document.documentElement.clientWidth<=700){
        delimiterClass = 'content'
    }else{
        delimiterClass = 'background'
    }
    return (
        <div className="someProject">
            <div className="content project-header">
                <div className="project-header__back">
                    <NavLink to="/projects"><img src={back} alt="backLink"/> PROJECTS</NavLink>
                </div>
                <h1>RESIDENTIAL DECK CONSTRUCTION</h1>
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
                            This project involved the design and construction of a spacious deck that seamlessly integrates with
                            the natural surroundings. The client’s vision was to have a functional yet aesthetically pleasing outdoor
                            space that would serve as an extension of their home. Our team worked closely with the client to ensure
                            their budget was accommodated without compromising on quality or design.
                        </p>
                    </div>
                </div>
            </div>
            <div id="delimiter" className={delimiterClass}>
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