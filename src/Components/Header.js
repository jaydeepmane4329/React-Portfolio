// import Image from './Images/Profile.jpg';

import { header } from '../Profile';
import './Styles/Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();


function Header(){
    return(
        <div id='header'  data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="10"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center" className='header'>
                <div className="left">{header.pic}</div>

             <div className="right">
                 <h2>About Me</h2>
                 <hr />
                 <p1>{header.about}</p1>
             </div>

        </div>

    )
}
export default Header;