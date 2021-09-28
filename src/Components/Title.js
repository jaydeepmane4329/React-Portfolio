import {Link} from 'react-scroll';
import React from 'react';
import Particles from "react-tsparticles";
import { title } from '../Profile';
import './Styles/Title.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Title(){
    return(

      <div className='main' data-aos='onscreen'>
       
        
        <div  className='title'>
          
        <div className='cartoon'>
          {title.cartoon}
        </div>

          <h1>{title.name}</h1>

          <p class="typewriter">This Is My Portfolio...</p> 
           
           <Link id='button' activeClass='active'
           to='header'>
          <button className='btn2'>Click Me <i class="fas fa-mouse"></i> </button>
          </Link>
          
          </div>
          
     <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value:"#FFFFFF",
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
              width:100,
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
      
       
        </div>
       
      
    );
}
export default Title;