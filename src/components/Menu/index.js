import { Link } from 'react-router-dom';
import logo from './logoCube2.png';
import styles from './Menu.module.css';

function Menu() {
    return (
        <header className={styles.menu}>
            <Link to='./'>
                <img src={logo} alt='Logo do magicubeflix'></img>
            </Link>

        </header>
    )
}

export default Menu;