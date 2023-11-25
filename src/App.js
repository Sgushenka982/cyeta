import './App.css';
import Header from "./Header";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import LatestProjects from "./LatestProjects";
import Footer from "./Footer";

function App() {
  return (
      <div className="page">
          <Header/>
          <AboutUs/>
          <div className="background">
              <div className="content expirience">
                  <div className="expirience-item">
                      <div className="expirience-item__number">+5</div>
                      <p>Years within the industry in New Zealand</p>
                  </div>
                  <div className="whiteCircle"></div>
                  <div className="expirience-item">
                      <div className="expirience-item__number">+15</div>
                      <p>Years of experience overseas</p>
                  </div>
                  <div className="whiteCircle"></div>
                  <div className="expirience-item">
                      <div className="expirience-item__number">+22</div>
                      Finished projects
                  </div>
              </div>
          </div>
          <WhyChooseUs/>
          <LatestProjects/>
          <Footer/>
      </div>
  );
}

export default App;
