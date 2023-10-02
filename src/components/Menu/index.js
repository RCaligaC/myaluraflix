import { Link } from 'react-router-dom';
import logo from './logoCube2.png';
import styles from './Menu.module.css';
import Botao from '../Botao';

function Menu() {
    return (
        <header className={styles.menu}>
            <Link to='./'>
                <img src={logo} alt='Logo do magicubeflix'></img>
            </Link>

            {/* <Link className={styles.link} to='./novovideo'>
                <Botao texto="Novo video" />
            </Link> */}

        </header>
    )
}

export default Menu;