import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from 'axios';
import "./index.css";
import "./sass/styles.scss";
import BioCards from "./components/BioCard/BioCard.jsx"
import SkillsGallery from "./components/SkillsCard/SkillsGallery.jsx"

const apiCall = () => {
  axios.get('http://localhost:3000').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <header className='header'>
      <div className="wrapper header__wrapper">
        <img className="header__logo" src="cornerstone-logo.png" alt="Cornerstone Church"  />
        <h1 className="header__title">Cornerstone Church Mission Trip</h1>
      </div>
    
    </header>
    <main className="main">
      
      <div className="wrapper">
      <h2 className="main__meettheteam">Meet The Team</h2>
        <div id='biocards'>
          <BioCards />
        </div>
        <hr />
        <div id='skillscards'>
          <SkillsGallery />
        </div>
      </div>
      
    </main>
    <footer className="footer">
      <div className="wrapper">
        <p className="footer__copy">&copy;2025 Randy Pospisil</p>
      </div>
      
    </footer>
  </StrictMode>
);