import { getHeaderAnimation } from '../Profile';
import './Styles/Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Header() {
    return (
        <div>
            {getHeaderAnimation()}
        </div>
    )
}
export default Header;

