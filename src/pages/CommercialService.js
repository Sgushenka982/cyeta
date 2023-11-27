import React from "react";
import back from '../resource/img/icons/go-back-icon.svg';
import picture1 from './../resource/img/commercial/framing.jpg'
import picture2 from './../resource/img/commercial/window-inst.jpg'
import picture3 from './../resource/img/commercial/skirting.jpg'
import picture4 from './../resource/img/commercial/cladding.jpg'
import picture5 from './../resource/img/commercial/cavity.jpg'
import picture6 from './../resource/img/commercial/subcontracting.jpg'
import '../resource/css/CommercialService.css'
import {NavLink} from "react-router-dom";

const CommercialService =()=>{
    return (
        <div className="commercialService">
            <div className="background commercialService-header">
                <div className="content">
                    <div className="commercialService-header__back">
                        <NavLink to="/services"><img src={back} alt="backLink"/> SERVICES</NavLink>
                    </div>
                    <h1>COMMERCIAL</h1>
                    <p>
                        We take pride in our comprehensive carpentry services that
                        enhance the functionality, durability, and aesthetics of
                        commercial sites.
                    </p>
                    <button className="btn">Request a Quote</button>
                </div>
            </div>
            <div className="content commercialService-content">
                <div className="commercialService-content__item">
                    <div className="flex-wrapper">
                        <div className="itemS padRight">
                            <h3 className="item-header">
                                Framing for Structural Integrity / 01
                            </h3>
                            <p className="item-text">
                                Our framing services are the backbone of your commercial space,
                                ensuring it stands strong for years to come. We specialize in
                                precision framing that provides the structural integrity necessary
                                for any project, from office buildings to retail spaces.
                            </p>
                            <img src={picture1} alt="picture1"/>
                        </div>
                        <div className="itemL padLeft">
                            <h3 className="item-header">
                                Windows and Doors Installation / 02
                            </h3>
                            <p className="item-text">
                                Windows and doors serve as more than just entrances; they define the character and functionality of your commercial
                                property. Our seasoned installation team not only guarantees a perfect fit, insulation, and security but also offers a wide
                                range of design choices to match your aesthetic preferences, resulting in an energy-efficient, appealing, and distinctive space
                                that sets the stage for success.
                            </p>
                            <img src={picture2} alt="picture2"/>
                        </div>
                    </div>
                </div>
                <div className="commercialService-content__item">
                    <div className="flex-wrapper">
                        <div className="itemL padRight ">
                            <h3 className="item-header">
                                Skirting and Architraves / 03
                            </h3>
                            <p className="item-text">
                                Skirting and architraves are the subtle details that make a big impact on the ambiance of your commercial space. We take
                                pride in crafting and installing skirting and architraves with meticulous attention to detail, ensuring that every corner of your
                                interiors radiates a sense of timeless elegance and sophistication. These finishing touches are a testament to the care and
                                craftsmanship we invest in every project, setting your commercial space apart with a touch of refined charm.
                            </p>
                            <img src={picture3} alt="picture3"/>
                        </div>
                        <div className="itemS padLeft">
                            <h3 className="item-header">
                                Cladding for Exterior Protection / 04
                            </h3>
                            <p className="item-text">
                                Protect your commercial building from the elements with our
                                cladding expertise. Our skilled team selects and installs durable
                                cladding materials that not only shield your structure but also add a
                                touch of architectural distinction.
                            </p>
                            <img src={picture4} alt="picture4"/>
                        </div>
                    </div>
                </div>
                <div className="commercialService-content__item">
                    <div className="flex-wrapper">
                        <div className="itemS padRight">
                            <h3 className="item-header">
                                Cavity and Waterproof Paper Installation / 05
                            </h3>
                            <p className="item-text">
                                For commercial spaces, moisture management is essential. Our cavity and waterproof
                                paper installation services ensure that your building remains dry and well-protected,
                                preventing potential water damage.
                            </p>
                            <p className="item-text">
                                Whether you’re embarking on a new commercial construction project or renovating an
                                existing space, our carpentry services are designed to meet your needs. At Cyeta Limited
                                we believe that craftsmanship is the cornerstone of every successful project. Contact us
                                today to discuss how our carpentry expertise can elevate your commercial site.
                            </p>
                            <img src={picture5} alt="picture5"/>
                        </div>
                        <div className="itemL padLeft">
                            <h3 className="item-header">
                                Subcontracting / 06
                            </h3>
                            <p className="item-text">
                                We take pride in our collaborative approach to the construction industry and are delighted
                                to partner with fellow building companies on a subcontract basis when they require
                                additional support.
                            </p>
                            <p className="item-text">
                                Our team is well-equipped and experienced, ready to seamlessly integrate into your project
                                to provide the expertise and manpower needed to ensure its success. Whether it’s due to a
                                surge in demand or staffing shortages, we understand the challenges you face and are
                                committed to delivering quality work while maintaining your company’s reputation. When
                                you choose us as your subcontractor, you’re choosing a reliable and efficient partner to
                                help you meet your project goals.
                            </p>
                            <img src={picture6} alt="picture6"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommercialService