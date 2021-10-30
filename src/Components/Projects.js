
import { projects } from "../Profile";
import './Styles/Project.css'
import ProjectBox from "./ProjectBox";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function mappingProjects(temp){
    return(
        <ProjectBox
         img = {temp.img}
         project = {temp.project}
         technologies= {temp.technologies}
         Demo= {temp.Demo}
        />
    )
}




function Projects(){
    return(
        <div className='Pro'>
            <h5>Projects</h5>
        <div 
       
        className='projects'>{projects.map(mappingProjects)}</div>
        </div>
     
    )
}
export default Projects;