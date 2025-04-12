import { StrictMode } from "react";
import BioCards from "../BioCard/BioCard.jsx"
import SkillsGallery from "../SkillsCard/SkillsGallery.jsx"
import ProjectList from "../ProjectCard/ProjectList.jsx"
import { useParams, Link } from "react-router-dom";
import {HeaderBP,FooterBP} from "./HeaderFooter.jsx"
function Home(){
return(
  <StrictMode>
    <HeaderBP />
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
        <hr />
      
      <div id='projects'>
        <ProjectList />
      </div>
    </div>
    </main>
    <FooterBP />
    
  </StrictMode>
);
}
export default Home;