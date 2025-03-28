import ProjectCard from "./ProjectCard";

const projectListArr = [
    { 
        id: "personal-website", title: "Personal Website", 
        short: "This project is my personal website using React, NodeJS, and SQLite to show pictures, writings, and about me.", 
        long:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia cum, dolore eligendi obcaecati suscipit accusantium, saepe ullam deserunt quam rem corrupti? Dolor perspiciatis, inventore sunt incidunt iure natus. Ullam explicabo voluptatibus itaque vel error quod rerum molestias totam, non ab sunt excepturi vitae quia consectetur ex adipisci libero sapiente.",
        gitlink: "https://github.com/posisme/personalwebsite" 
    },
    { 
        id: "school-project", title: "School Project", 
        short: "This project is what I learned in this class using React and Sass.", 
        long:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia cum, dolore eligendi obcaecati suscipit accusantium, saepe ullam deserunt quam rem corrupti? Dolor perspiciatis, inventore sunt incidunt iure natus. Ullam explicabo voluptatibus itaque vel error quod rerum molestias totam, non ab sunt excepturi vitae quia consectetur ex adipisci libero sapiente.",
        
        gitlink: "https://github.com/posisme/first-app" 
    },
    { 
        id: "nflrisk", title: "NFL Risk", 
        short: "This project uses PHP, SQLITE and JQuery to make a map with Google Maps for a fun Fantasy NFL game", 
        long:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia cum, dolore eligendi obcaecati suscipit accusantium, saepe ullam deserunt quam rem corrupti? Dolor perspiciatis, inventore sunt incidunt iure natus. Ullam explicabo voluptatibus itaque vel error quod rerum molestias totam, non ab sunt excepturi vitae quia consectetur ex adipisci libero sapiente.",
        
        gitlink: "https://github.com/posisme/nflrisk" 
    }
];

function ProjectList() {
    
    
    return (
        <div className="projects">
            
            
                {projectListArr.map((project) => (
                    <ProjectCard key={project.id} title={project.title} description={project.short} gitlink={project.gitlink} link={"/projects/"+project.id} />
                ))}
            
        </div>
    );
};


export default ProjectList;
export {
    projectListArr
}