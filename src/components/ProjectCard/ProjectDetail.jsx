import { useParams, Link } from "react-router-dom";

function ProjectDetail() {
    const { id } = useParams();

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
            <h1 className="project-detail__title">Project {id}</h1>
            <p className="project-detail__text">More details about project {id}...</p>
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