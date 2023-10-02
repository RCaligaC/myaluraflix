import { Link } from 'react-router-dom';
import logo from '../Menu/logoCube2.png';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Link to='./' className={styles.link}>
                <img src={logo} alt='Logo do magicubeflix'></img>
                <h3>By RCaligaC - 2023 - Imersão React / Oracle Next Education-T5 + Alura</h3>
            </Link>
        
        </footer>
    )
}

export default Footer;