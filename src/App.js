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

function App() {
    const location = useLocation()
    return (
        <div className={'page ' + (location.pathname === '/services' ? 'background' : '')}>
            <Header/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/services/residential" element={<ResidentialService/>}/>
                <Route path="/services/commercial" element={<CommercialService/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/projects/2" element={<ProjectDeck/>}/>
                <Route path="/projects/3" element={<ProjectKohima/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
