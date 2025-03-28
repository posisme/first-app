import ProjectCard from "./ProjectCard";

function ProjectList() {
    const projectList = [
        { id: "personal-website", title: "Personal Website", 
            description: "This project is my personal website using React, NodeJS, and SQLite to show pictures, writings, and about me.", 
            link: "https://github.com/posisme/personalwebsite" },
            { id: "school-project", title: "School Project", 
                description: "This project is what I learned in this class using React and Sass.", 
                link: "/projects/school-project" }
    ];
    
    return (
        <div className="projects">
            <h1 className="projects__title">Projects Showcase</h1>
            <div className="projects__grid">
                {projectList.map((project) => (
                    <ProjectCard key={project.id} title={project.title} description={project.description} link={"/projects/"+project.id} />
                ))}
            </div>
        </div>
    );
}

export default ProjectList;