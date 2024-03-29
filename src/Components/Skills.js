import { skills } from "../Profile"
import SkillBar from "./SkillBar";
import './Styles/skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function mappingSkills(temp) {
    return (
        <SkillBar
            name={temp.name}
            skill={temp.skill}
        />
    )
}
function Skills() {
    return (
        <div className="skillsContainer">
            <h2 data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="bottom-bottom">Skills</h2>
            <div data-aos="slide-up"
                data-aos-offset="0"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="bottom-bottom"

                className='skills'>

                {skills.map(mappingSkills)}
            </div>
        </div>
    )
}
export default Skills;