import AOS from 'aos';
import 'aos/dist/aos.css';
import { contact } from '../Profile';
import './Styles/Contact.css';
AOS.init();

function Contact() {
    return (
        <div className='wrapper'>
            <h2
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="bottom-bottom"
                className='contactHead'>Let's Connect</h2>
            <div className='contact'
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="bottom-bottom">
                <div id="man" >{contact.man}</div>
                <div>
                    <a href="https://www.linkedin.com/in/jaydeep-mane-305512198/"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.hackerrank.com/jaydeepmane4329"><i class="fab fa-hackerrank"></i></a>
                    <a href="https://github.com/jaydeepmane4329"><i class="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/jaydeepm_05/"><i class="fab fa-instagram"></i></a>
                    <div>
                        <a className='download' download href='https://drive.google.com/file/d/1NCUrEf8VDsI0k2ADU8D5f2LjcoiI_jlu/view?usp=sharing'><i class="fas fa-download"></i>MY RESUME</a>
                    </div>
                </div>
                <div>
                    <form action="https://formcarry.com/s/rdgCGo3atzM" method="POST" accept-charset="UTF-8" >
                        <input type="text" name="name" id="" placeholder='Jhon Deo' />
                        <input type="text" name="email" id="" placeholder='example@gmail.com' />
                        <input type="text" name="Subject" id="" placeholder='subject' />
                        <textarea name="Message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
            <footer>2021 Code By ❤ Jaydeep</footer>
        </div>
    )
}
export default Contact;