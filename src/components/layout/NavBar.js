import styles from './NavBar.module.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Container from './Container';
import logo from '../../img/costs_logo.png'
const NavBar = () => {
    return ( 
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img src={logo} alt="Costs"/></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}> 
                        <Link to='/projects'>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/company'>Company</Link>
                    </li>
                    <li className={styles.item}> 
                        <Link to='/contact'>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
     );
}
 
export default NavBar;