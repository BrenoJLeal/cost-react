import styles from './Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
const Footer = () => {
    return ( 
        <footer  className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaGithub/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2024</p>
        </footer>
     );
}
 
export default Footer;