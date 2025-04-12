import { useParams, Link } from "react-router-dom";
import { projectListArr } from "./ProjectList";
import { HeaderBP, FooterBP } from "../Home/HeaderFooter"

function ProjectDetail() {
    const { id } = useParams();
    let project = projectListArr.filter((f)=>{if(f.id == id){return f;}});
    console.log(project);
    return (<>
        <HeaderBP />
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
        <FooterBP />
      </>
    );
}

export default ProjectDetail;