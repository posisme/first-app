import { StrictMode } from "react";
import BioCards from "../BioCard/BioCard.jsx"
import SkillsGallery from "../SkillsCard/SkillsGallery.jsx"
import ProjectList from "../ProjectCard/ProjectList.jsx"

function Home(){
return(
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
      
      
      <div id='projects'>
        <ProjectList />
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
}
export default Home;