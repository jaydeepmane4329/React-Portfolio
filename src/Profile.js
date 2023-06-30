import Image1 from './Images/Project-1.png';
import Image2 from './Images/Project-2.png';
import Image3 from './Images/Project-3.png';
import Image4 from './Images/Project-4.png';
import Image5 from './Images/Project-5.png';
import Image6 from './Images/Project-6.png';
import Profile from './Images/Profile.jpg';
import ContactPic from './Images/man.png';
import Cartoon from './Images/cartoon.png';
import Particles from "react-tsparticles";

const title = {
    cartoon: <img src={Cartoon} height='200px' width="200px" alt="cartoon-png" />,
    name: "I'm Jaydeep ",
}

const header = {
    about: "Software engineer who loves to transform ideas into reality using code. always ready and excited to learn new technologies. good at front-end as well in back-end Web technologies. i'm a social person and good team player, exited to implement my skills in corporate world.",
    pic: <img src={Profile} alt="Profile-pic" height='400px' width='300px' />
}

const skills = [
    {
        key: 1,
        name: 'HTML5',
        skill: <i class="fab fa-html5"></i>
    },
    {
        id: 2,
        name: 'CSS3',
        skill: <i class="fab fa-css3-alt"></i>
    },
    {
        id: 3,
        name: 'JavaScript',
        skill: <i class="fab fa-js"></i>
    },
    {
        id: 4,
        name: 'React.js',
        skill: <i class="fab fa-react"></i>
    },
    {
        id: 5,
        name: 'Node.js',
        skill: <i class="fab fa-node"></i>
    },
    {
        id: 6,
        name: 'Java',
        skill: <i class="fab fa-java"></i>
    },
    {
        id: 7,
        name: 'Github',
        skill: <i class="fab fa-github"></i>
    },
    {
        id: 8,
        name: 'C Programming',
        skill: <i class="fab fa-cuttlefish"></i>
    },
    {
        id: 9,
        name: 'Mongo',
        skill: <i class="fas fa-database"></i>
    }];


const projects = [
    {
        id: 1,
        img: <img src={Image1} height='180px' width='180px' alt="Project" />,
        project: 'Crypto-App',
        technologies: 'HTML,CSS,JavaScript',
        Demo: <a href="https://cryptocurrancy.netlify.app/">Demo Link</a>
    },
    {
        id: 2,
        img: <img src={Image2} height='180px' width='180px' alt="Project" />,
        project: 'P',
        technologies: 'HTML,CSS,JavaScript',
        Demo: <a href="">Demo Link</a>

    },
    {
        id: 3,
        img: <img src={Image3} height='180px' width='180px' alt="Project" />,
        project: 'Chat-App',
        technologies: 'React,Firebase',
        Demo: <a href="https://chat-app-jaydeep.netlify.app/">Demo Link</a>

    },
    {
        id: 4,
        img: <img src={Image4} height='180px' width='180px' alt="Project" />,
        project: 'Car Management System',
        technologies: 'Angular,Angular Material,JSON Server',
        Demo: <a href="https://github.com/jaydeepmane4329/Car-Management-System.git">Github Link</a>

    },
    {
        id: 5,
        img: <img src={Image5} height='180px' width='180px' alt="Project" />,
        project: 'Photo Sharing App',
        technologies: 'MERN Stack,Material UI',
        Demo: <a href="https://github.com/jaydeepmane4329/Photo-Sharing-App.git">Github Link</a>

    },
    {
        id: 6,
        img: <img src={Image6} height='180px' width='180px' alt="Project" />,
        project: 'Stock Analyzer',
        technologies: 'HTML,CSS',
        Demo: <a href="https://stockanalyser.netlify.app/">Demo Link</a>

    }
]

const contact = {
    man: <img src={ContactPic} height='auto' width='auto' alt="cortoon-Image" />
}

function getHeaderAnimation() {
    return <div data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="10"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center" className='header'>
        <div className="left">{header.pic}</div>
        <div className="right">
            <h2>About Me</h2>
            <hr />
            <p>{header.about}</p>
        </div>
    </div>
}

function particles() {
    return <Particles
        id="tsparticles"
        options={{
            background: {
                color: {
                    value: "#FFFFFF",
                },
            },
            fpsLimit: 500,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 100,
                        opacity: 0.0,
                        size: 3,
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: -5,
                    },
                },
            },
            particles: {
                color: {
                    value: "#FF0000",
                    width: 100,
                },
                links: {
                    color: "#FF0000",
                    distance: 150,
                    enable: true,
                    // opacity: 0.2,
                    width: 0.1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 5,
                },
            },
            detectRetina: true,
        }}
        height="100vh"
    />
}
export { title, skills, header, projects, contact, getHeaderAnimation, particles };