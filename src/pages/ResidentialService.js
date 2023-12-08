import React from "react";
import back from '../resource/img/icons/go-back-icon.svg';
import backBlack from '../resource/img/icons/go-back-icon-black.svg';
import picture1 from './../resource/img/residential-service/img-1.jpg'
import picture2 from './../resource/img/residential-service/img-2.jpg'
import picture3 from './../resource/img/residential-service/img-3.jpg'
import picture4 from './../resource/img/residential-service/img-4.jpg'
import picture5 from './../resource/img/residential-service/img-5.jpg'
import '../resource/css/ResidentialService.css'
import {NavLink} from "react-router-dom";

const ResidentialService =()=>{
    return (
        <div className="residentialService">
            <div className="background residentialService-header">
                <div className="content">
                    <div className="residentialService-header__back">
                        <NavLink to="/services"><img src={document.documentElement.clientWidth < 700 ? backBlack : back} alt="backLink"/> SERVICES</NavLink>
                    </div>
                    <h1>RESIDENTIAL</h1>
                    <p>
                        At Cyeta Limited, we’re all about creating amazing homes with
                        top-notch quality. Working with us means turning your dream
                        home into a reality, with every detail designed to perfection.
                    </p>
                    <button className="btn">Request a Quote</button>
                </div>
            </div>
            <div className="residentialService mobileImg"></div>
            <button className="mobileBtn btn">Request a Quote</button>
            <div className="content residentialService-content">
                <div className="residentialService-content__item">
                    <div className="flex-wrapper">
                        <div className="item-textContent">
                            <h3 className="item-header">
                                Home renovations / 01
                            </h3>
                            <p className="item-text">
                                Whether you’ve recently bought a place in Auckland, want to sell your property at a higher value, or are simply tired of leaking
                                places, rotted floors, or craving something entirely new, our home renovations are your key to success.
                            </p>
                            <p className="item-text">
                                At Cyeta Limited, we believe that your home is a canvas waiting to be transformed. Our skilled team of professionals
                                specializes in resolving structural issues, revitalizing worn-out spaces, and creating fresh, modern designs that breathe new
                                life into your living spaces. We understand the importance of creating a space that not only meets your immediate needs but
                                also adds value to your property.
                            </p>
                            <p className="item-text">
                                With our expertise, we turn your vision into reality, creating a home that reflects your style and maximizes its potential.
                                Explore our home renovation services to discover how we can elevate your living experience, whether you plan to stay or sell.
                            </p>
                        </div>
                        <img src={picture1} alt="picture1"/>
                        <img className="mobile" src={picture1} alt="picture1"/>
                    </div>
                </div>
                <div className="residentialService-content__item">
                    <div className="flex-wrapper">
                        <img src={picture2} alt="picture2"/>
                        <div className="item-textContent">
                            <h3 className="item-header">
                                New Builds / 02
                            </h3>
                            <p className="item-text">
                                We specialize in bringing new visions to life through our expert new builds. We understand that your dream home is a unique
                                reflection of your lifestyle and needs, and we’re here to turn that vision into reality.
                            </p>
                            <p className="item-text">
                                Our builders collaborate closely with you to create a custom-built home that perfectly aligns with your preferences and
                                aspirations. From selecting the ideal location and designing the layout to sourcing top-quality materials and executing
                                precise construction, we handle every aspect of the project with meticulous care and attention to detail. With our
                                commitment to excellence, craftsmanship, and innovation, we transform your dream into a beautifully crafted, functional,
                                and energy-efficient new home that you’ll cherish for years to come.
                            </p>
                        </div>
                        <img className="mobile" src={picture2} alt="picture2"/>
                    </div>
                </div>
                <div className="residentialService-content__item">
                    <div className="flex-wrapper">
                        <div className="item-textContent">
                            <h3 className="item-header">
                                Small Building Jobs / 03
                            </h3>
                            <p className="item-text">
                                We pride ourselves on our versatility and commitment to excellence, which extends to our expertise in handling small
                                building jobs. Whether you require minor repairs, maintenance, or small-scale construction projects, we are your trusted
                                partner.
                            </p>
                            <p className="item-text">
                                Our dedicated team of skilled professionals approaches every task with the same level of attention to detail and quality
                                craftsmanship that we apply to larger projects. From fixing leaky roofs and repairing damaged walls to installing new fixtures
                                or renovating a single room, our goal is to enhance the functionality and aesthetics of your space, no matter the scale. We
                                understand that even the smallest jobs can have a significant impact on your comfort and satisfaction, and we’re here to
                                deliver exceptional results for all your small building needs.
                            </p>
                        </div>
                        <img src={picture3} alt="picture3"/>
                        <img className="mobile" src={picture3} alt="picture3"/>
                    </div>
                </div>
                <div className="residentialService-content__item">
                    <div className="flex-wrapper">
                        <img src={picture4} alt="picture4"/>
                        <div className="item-textContent">
                            <h3 className="item-header">
                                Outdoor Works / 04
                            </h3>
                            <p className="item-text">
                                Imagine hosting a small group or a family reunion on a freshly built deck on a warm summer evening—our expertly crafted
                                decks provide the perfect setting for cherished moments and outdoor gatherings. We understand that unforeseen challenges,
                                such as catastrophic floods, can disrupt your property. That’s why we’re here to help you assess the situation and offer
                                solutions, including the installation of retaining walls to protect your space. If your once-charming fence has seen better
                                days, becoming older, rotted, and detracting from the beauty of your home, we can revitalize your property’s aesthetics with
                                our fencing expertise. With our commitment to quality, durability, and innovative design, we transform your outdoor spaces
                                into havens of beauty, functionality, and memorable experiences.
                            </p>
                        </div>
                        <img className="mobile" src={picture4} alt="picture4"/>
                    </div>
                </div>
                <div className="residentialService-content__item">
                    <div className="flex-wrapper">
                        <div className="item-textContent">
                            <h3 className="item-header">
                                Installation of new Kitchens / 05
                            </h3>
                            <p className="item-text">
                                At Cyeta Limited, we are your kitchen transformation specialists, dedicated to crafting culinary spaces that exude elegance
                                and functionality. The kitchen is where cherished memories are created and flavors come to life, and we’re here to make that
                                experience exceptional. Our team of skilled designers and professional installers takes pride in turning your kitchen dreams
                                into reality. From conceptualizing the perfect layout to selecting premium materials and executing the precise installation,
                                we approach every kitchen installation project with a passion for innovation and detail. Whether you seek a modern,
                                minimalist design or a cozy, rustic retreat, our commitment to excellence ensures that your kitchen installation not only
                                meets but surpasses your aspirations, providing a space where culinary creativity knows no bounds.
                            </p>
                        </div>
                        <img src={picture5} alt="picture5"/>
                        <img className="mobile" src={picture5} alt="picture5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResidentialService