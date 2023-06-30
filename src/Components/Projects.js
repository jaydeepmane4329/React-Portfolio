
import { projects } from "../Profile";
import './Styles/Project.css'
import ProjectBox from "./ProjectBox";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function mappingProjects(temp) {
    return (
        <ProjectBox
            img={temp.img}
            project={temp.project}
            technologies={temp.technologies}
            Demo={temp.Demo}
        />
    )
}
function Projects() {
    return (
        <div className='Pro'>
            <h2 data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="bottom-bottom">Projects</h2>
            <div
                className='projects'>{projects.map(mappingProjects)}</div>
        </div>
    )
}
export default Projects;