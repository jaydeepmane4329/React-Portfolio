import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { contact } from '../Profile';
import './Styles/Contact.css';

// ..
AOS.init();

function Contact(){
    return(
        <div className='wrapper'
        data-aos="zoom-in"
         data-aos-offset="0"
         data-aos-delay="0"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         data-aos-anchor-placement="bottom-bottom">
      <h2 className='contactHead'>Connect With Me</h2>
       
      <div className='contact'>
            <div >{contact.man}</div>
            <div>
               <a href="https://www.linkedin.com/in/jaydeep-mane-305512198/"><i class="fab fa-linkedin"></i></a>
               <a href="https://www.hackerrank.com/jaydeepmane4329"><i class="fab fa-hackerrank"></i></a>
               <a href="https://github.com/jaydeepmane4329"><i class="fab fa-github"></i></a>
               <a href="https://www.instagram.com/jaydeepm_05/"><i class="fab fa-instagram"></i></a>
               <div>
                   <a  className='download' download href='https://drive.google.com/file/d/1kZj-VcRiUBQuV-nTE6-kKc_3RkZiHxXi/view?usp=sharing'><i  class="fas fa-download"></i>MY RESUME</a>
               </div>
            </div>
            <div>
            <form action="https://formcarry.com/s/rdgCGo3atzM" method="POST" accept-charset="UTF-8" >
                          <input type="text" name="name" id=""  placeholder='Your Name'/>
                          <input type="text" name="email" id=""  placeholder='Your Email'/>
                          <input type="text" name="Subject" id=""  placeholder='Subject'/>
                          <textarea name="Message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                          <button>Send Message</button>

                </form>
            </div>
      </div>
      <footer>2021 Code By ❤ Jaydeep</footer>
      </div>
    )
}export default Contact;