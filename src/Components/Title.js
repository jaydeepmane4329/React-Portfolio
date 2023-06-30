import { Link } from 'react-scroll';
import React from 'react';
import { particles } from '../Profile';
import { title } from '../Profile';
import './Styles/Title.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Title() {
  return (
    <div className='main' data-aos='onscreen'>
      <div className='title'>
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
      {particles()}
    </div>
  );
}
export default Title;