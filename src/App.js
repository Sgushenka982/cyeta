import './resource/css/App.css';
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import Homepage from "./pages/Homepage";
import {Route, Routes, useLocation} from "react-router-dom";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ResidentialService from "./pages/ResidentialService";
import CommercialService from "./pages/CommercialService";
import ProjectKohima from "./pages/ProjectKohima";
import ProjectDeck from "./pages/ProjectDeck";
import AboutUs from "./pages/AboutUs";
import ProjectCastorBay from "./pages/ProjectCastorBay";
import ProjectCozy from "./pages/ProjectCozy";

function App() {
    const location = useLocation()

    const openCloseRequestForm =()=> {
        const el = document.getElementById('RequestForm')
        const styles = window.getComputedStyle(el)
        if (styles.getPropertyValue("display") === 'none'){
            el.style.display = 'block'
            document.getElementById("popup-fade").classList.remove('hidden')
            document.getElementById("popup-fade").classList.add('visible')
        }else{
            el.style.display='none'
            document.getElementById("popup-fade").classList.remove('visible')
            document.getElementById("popup-fade").classList.add('hidden')
        }
    }
    return (
        <div className={'page ' + (location.pathname === '/services' ? 'background' : '')}>
            <Header openCloseRequestForm={openCloseRequestForm}/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/services/residential" element={<ResidentialService openCloseRequestForm={openCloseRequestForm}/>}/>
                <Route path="/services/commercial" element={<CommercialService openCloseRequestForm={openCloseRequestForm}/>}/>
                <Route path="/aboutUs" element={<AboutUs/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/projects/2" element={<ProjectDeck/>}/>
                <Route path="/projects/3" element={<ProjectKohima/>}/>
                <Route path="/projects/4" element={<ProjectCastorBay/>}/>
                <Route path="/projects/5" element={<ProjectCozy/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
