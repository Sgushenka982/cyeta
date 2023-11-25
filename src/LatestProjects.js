import project1 from './resource/img/projects-1.jpg';


function LatestProjects(){
    return(
        <div className="content">
            <h2>LATEST PROJECTS</h2>
            <div className="item">
                <img src={project1} alt=""/>
                <div>
                    <div>
                        <span>RESIDENTIAL / HOME RENOVATIONS</span>
                        <span>2023</span>
                    </div>
                    <h3>Project name</h3>
                    <p>
                        Experience the difference when you choose our services, where we place a premium on speed
                        and time efficiency. We recognize that our customers are eager to witness the transformative
                        results and invite friends and family to celebrate their upgraded homes. That’s why we
                        prioritize efficiency at every step of the project, ensuring you can enjoy the results sooner and
                        share the joy of your home’s transformation with loved ones.
                    </p>
                    <div>
                        <span>See more</span>
                        <div className="purpleCircule"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProjects