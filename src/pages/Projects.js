import React from "react";
import project1 from '../resource/img/index-html/projects-1.jpg';
import project2 from '../resource/img/index-html/projects-2.jpg';
import project3 from '../resource/img/index-html/projects-3.jpg';
import project4 from '../resource/img/project-3/hero-project-3.png';
import project5 from '../resource/img/project-4/hero-project-4.png';
import "../resource/css/Projects.css"
import {NavLink} from "react-router-dom";

function Projects(){
    return(
        <React.Fragment>
            <div className="content">
                <h1>Projects</h1>
                <p>On this page you can get acquainted with all the projects of our organization</p>
                <div className="projectList">
                    <NavLink className="project" to="/projects/1">
                        <h3>Project name</h3>
                        <img src={project1} alt="projectImage"/>
                    </NavLink>
                    <NavLink className="project" to="/projects/2">
                        <h3>Residential Deck Construction</h3>
                        <img src={project2} alt="projectImage"/>
                    </NavLink>
                    <NavLink className="project" to="/projects/3">
                        <h3>Luxury New Build Home in Kohimarama, Auckland</h3>
                        <img src={project3} alt="projectImage"/>
                    </NavLink>
                    <NavLink className="project" to="/projects/4">
                        <h3>Prestigious Home Renovation at Castor Bay</h3>
                        <img src={project4} alt="projectImage"/>
                    </NavLink>
                    <NavLink className="project" to="/projects/5">
                        <h3>Cozy House Transformation at St Heliers</h3>
                        <img src={project5} alt="projectImage"/>
                    </NavLink>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projects