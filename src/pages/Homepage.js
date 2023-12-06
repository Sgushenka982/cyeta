import React from "react";
import AboutUs from "../templates/AboutUs";
import WhyChooseUs from "../templates/WhyChooseUs";
import LatestProjects from "../templates/LatestProjects";
import circleBg from '../resource/img/icons/circle-bg.svg'

const Homepage=()=>{
    return(
        <React.Fragment>
            <AboutUs/>
            <div className="background">
                <div className="content experience">
                    <div className="flex-wrapper">
                        <div className="experience-item">
                            <div className="experience-item__number">+5</div>
                            <p>Years within the industry in New Zealand</p>
                        </div>
                        <div className="whiteCircle"></div>
                        <div className="experience-item">
                            <div className="experience-item__number">+15</div>
                            <p>Years of experience overseas</p>
                        </div>
                        <div className="whiteCircle"></div>
                        <div className="experience-item">
                            <div className="experience-item__number">+22</div>
                            <p>Finished projects</p>
                        </div>
                    </div>
                </div>
            </div>
            <WhyChooseUs/>
            <LatestProjects/>
            <img id="circle1" className="circle1" src={circleBg}/>
            {/*<img id="circle2" className="circle1" src={circleBg}/>*/}
            <img id="circle3" className="circle1" src={circleBg}/>
            <img id="circle4" className="circle2" src={circleBg}/>
            <img id="circle5" className="circle2" src={circleBg}/>
            <img id="circle6" className="circle2" src={circleBg}/>
            {/*<img id="circle7" className="circle1" src={circleBg}/>*/}
        </React.Fragment>
    )
}

export default Homepage