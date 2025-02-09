import { projectData } from "@/lib/projectData";
import ProjectCard from "@/ui/ProjectCard";

const Projects = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
            <ProjectCard projectData={projectData} />
        </div>   
    );
}   

export default Projects;