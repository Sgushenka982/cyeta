import picture from '../resource/img/img.png'
import '../resource/css/aboutUs.css'

const AboutUs=()=>{
    return(
        <div className="content welcomePage">
            <div className="flex-wrapper">
                <img src={picture} alt=""/>
                <div className="welcomePage-content">
                    <h1 className="welcomePage-content__header">About us</h1>
                    <p className="welcomePage-content__text">
                        Welcome to Cyeta Ltd.
                        With a collective experience of numerous years in the construction industry, our team is not just a group of experts;
                        we're a family dedicated to making your dreams a reality.
                        At Cyeta Ltd, we believe that construction is not just about building structures;
                        it's about building relationships.
                    </p>
                    <p className="welcomePage-content__text">
                        Our approach is simple: "Make it nice, make it fast." We understand that your time is valuable, and so is a job well done. Our team thrives on effective communication, ensuring we not only meet but exceed your expectations. We take pride in being a company you'll remember and recommend - not just for the quality of our work but for the friendly and collaborative experience we provide.
                    </p>
                    <p className="welcomePage-content__text">
                        What sets us apart is our unique blend of experience and artistic thinking. Every member of our team brings a creative touch to the construction process, allowing us to find innovative solutions and think beyond the standard approaches. We're not just builders; we're experts who turn your ideas into beautifully crafted spaces.
                    </p>
                    <p className="welcomePage-content__text">
                        Our commitment goes beyond completing projects; it's about understanding your needs and bringing them to life. We work closely with you, utilising our artful approach to deliver results that stand out. Explore the difference a friendly and efficient team can make at Cyeta LTd. Thank you for considering us as your construction partner; we look forward to creating something exceptional together.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs