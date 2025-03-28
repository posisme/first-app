import { useParams, Link } from "react-router-dom";
import { projectListArr } from "./ProjectList";

function ProjectDetail() {
    const { id } = useParams();
    let project = projectListArr.filter((f)=>{if(f.id == id){return f;}});
    console.log(project);
    return (<>
        <header className='header'>
      <div className="wrapper header__wrapper">
        <img className="header__logo" src="/cornerstone-logo.png" alt="Cornerstone Church"  />
        <h1 className="header__title">Cornerstone Church Mission Trip</h1>
      </div>
    
    </header>
        <main  className="main">
        <div className="wrapper">
        <div className="project-detail">
            <h1 className="project-detail__title">{project[0].title}</h1>
            <p className="project-detail__short">{project[0].short}</p>
            <p className="project-detail__long">{project[0].long}</p>
            <p>GitHub: <Link to={project[0].gitlink} target="_blank" className="project-detail__gitlink">{project[0].gitlink}</Link></p>
            <Link to="/" className="project-detail__link">Back to Projects</Link>
        </div>
        </div>
        </main>
        <footer className="footer">
        <div className="wrapper">
          <p className="footer__copy">&copy;2025 Randy Pospisil</p>
        </div>
        
      </footer>
      </>
    );
}

export default ProjectDetail;