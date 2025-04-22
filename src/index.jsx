import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from 'axios';
import "./index.css";
import "./sass/styles.scss";
import BioCards from "./components/BioCard/BioCard.jsx"
import SkillsGallery from "./components/SkillsCard/SkillsGallery.jsx"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProjectList from "./components/ProjectCard/ProjectList.jsx"
import ProjectDetail from "./components/ProjectCard/ProjectDetail.jsx"
import Home from "./components/Home/Home.jsx"
import ContactForm from "./components/ContactForm/ContactForm.jsx";

const apiCall = () => {
  axios.get('http://localhost:3000').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <Router basename="/first-app">
        <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
     
    
  </StrictMode>
);