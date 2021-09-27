import Image1 from './Images/Project-1.png';
import Image2 from './Images/Project-2.png';
import Image3 from './Images/Project-3.png';
import Image4 from './Images/Project-4.png';
import Image5 from './Images/Project-5.png';
import Image6 from './Images/Project-6.png';
import Profile from './Images/Profile.jpg';
import ContactPic from './Images/man.png';
import Cartoon from './Images/cartoon.png';



const title = {
    cartoon : <img src={Cartoon} height='200px' width="200px" alt="cartoon-png" />,
    name : "I'm Jaydeep ",
}

const header = {
     about : "Software Engineer who loves to transform ideas into reality using code.Always ready and excited to learn new Technologies. Good at front-end as well as at back-end Web Technologies.I'm a social person and good team Player and   exited to implement my skills in corporate world.",
     pic : <img src={Profile} alt="Profile-pic" height='400px' width='300px' />
}

const skills = [
    { 
        key: 1,
        name : 'HTML5',
        skill : <i class="fab fa-html5"></i>
    },
    {
        id: 2,
        name : 'CSS3',
        skill: <i class="fab fa-css3-alt"></i>
    },
    {
        id: 3,
        name : 'JavaScript',
        skill : <i class="fab fa-js"></i>
    },
    {
        id: 4,
        name : 'React.js',
        skill: <i class="fab fa-react"></i>
    },
    {
        id: 5,
        name : 'Node.js',
        skill : <i class="fab fa-node"></i>
    },
    {
        id: 6,
        name : 'Java',
        skill : <i class="fab fa-java"></i>
    },
    {
        id: 7,
        name : 'Github',
        skill:<i class="fab fa-github"></i>
    },
    {
        id: 8,
        name : 'C Programming',
        skill : <i class="fab fa-cuttlefish"></i>
    },
    {
        id: 9,
        name : 'Mongo',
        skill : <i class="fas fa-database"></i>
}];


const projects =[
    {
       id: 1,
       img : <img src={Image2} height='250px' width='300px' alt="Project" />,
       project : 'Cash Counter',
       technologies : 'HTML,CSS,JavaScript',
       Demo : <a href="https://cashcount.netlify.app/">Demo Link</a>
    },
    {
        id: 2,
        img : <img src={Image3} height='250px' width='300px' alt="Project" />,
        project : 'Stock Analyzer',
        technologies : 'HTML,CSS,JavaScript',
        Demo : <a href="https://stockanalyser.netlify.app/">Demo Link</a>

     },
     {
        id: 3,
        img : <img src={Image5} height='250px' width='300px' alt="Project" />,
        project : 'Windows-11',
        technologies : 'HTML,CSS,JavaScript',
        Demo : <a href="file:///F:/repository%20Projects/windows%2011/index.html">Demo Link</a>
 
     },
     {
        id: 4,
        img : <img src={Image1} height='250px' width='300px' alt="Project" />,
        project : 'Price Table',
        technologies : 'HTML,CSS,React.js',
        Demo : <a href="https://cashcount.netlify.app/">Demo Link</a>

     },
     {
        id: 5,
        img : <img src={Image4} height='250px' width='300px' alt="Project" />,
        project : 'Portfolio',
        technologies : 'HTML,CSS,React.js',
        Demo : <a href="https://cashcount.netlify.app/">Demo Link</a>

     },
     {
        id: 6,
        img : <img src={Image6} height='250px' width='300px' alt="Project" />,
        project : ' Simple Portfolio',
        technologies : 'HTML,CSS',
        Demo : <a href="https://manejaydeep.netlify.app/">Demo Link</a>

     }
]

const contact ={
        man: <img src={ContactPic} height='auto' width='auto' alt="cortoon-Image" />
}

export {title,skills ,header,projects,contact};